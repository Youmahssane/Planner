import { Component, OnInit, TemplateRef, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { NbDialogService } from '@nebular/theme';
import { FormGroup, FormBuilder, FormControl, EmailValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-crud-user',
  templateUrl: './crud-user.component.html',
  styleUrls: ['./crud-user.component.scss']
})
export class CrudUserComponent implements OnInit {
  users: User[] = [];
  selectedItem: any;
  formClient: FormGroup =  new FormGroup({
    id: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl('')
  });
  constructor(private http: HttpClient, private dialogService: NbDialogService, private formBuilder: FormBuilder, private router:Router) { 
  }

  ngOnInit() {
   this.http.get<User[]>('http://localhost:51266/api/Auths').subscribe(response =>  this.users = response);
 
  }

  updateUser(id: any) {
    const userVal = new User(id,this.formClient.value['email'], this.formClient.value['password'], this.formClient.value['role']) ;
   this.http.put('http://localhost:51266/api/Auths/'
   + userVal.id, userVal).subscribe(res => 
    { alert('Mise à jour de l\'user effectuer ');
    close();
  });

  }
 
 
 
  DeleteUser(user: User) {
this.http.delete('http://localhost:51266/api/Auths/' + user.id).subscribe(res => alert('Vous avez supprimer un user ') );


  }
  
  open(dialog: TemplateRef<any>, user: User) {
    this.formClient = this.formBuilder.group({
      id: user.id,
      email: [user.email, EmailValidator],
      password: [user.password, Validators.required],
      role: user.role
    }
    );
    this.dialogService.open(dialog, { context: user });
  }
 
  toAdd() {
this.router.navigate(['../auth/register']);

  }
}
