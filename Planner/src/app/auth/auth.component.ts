import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  AuthForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }


  ngOnInit() {
    this.AuthForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    this.http.get('http://localhost:64866/api/Auths/' + this.AuthForm.value['userName']).subscribe(response => {
        alert('Bienvenue');
        this.router.navigate(['/Acceuil']);
    },
    error => console.log('test' + error)
    );

  }
}
