import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Alert } from 'selenium-webdriver';
import { Router } from '@angular/router';


@Component({
  selector: 'app-insc',
  templateUrl: './insc.component.html',
  styleUrls: ['./insc.component.scss']
})
export class InscComponent implements OnInit {
 submitted = false;
inscForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }


  ngOnInit() {
    this.inscForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit() {


this.http.post('http://localhost:64866/api/Auths', {
  userName: this.inscForm.value['userName'] ,
  password: this.inscForm.value['password']
}).subscribe(response => {
  console.log(response);
      alert('Votre Compte a été crée');
      this.router.navigate(['/Auth']);
},
    err => {
      alert('Error' + err);
      console.log(err);
}
);
}

}
