import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-insc',
  templateUrl: './insc.component.html',
  styleUrls: ['./insc.component.scss']
})
export class InscComponent implements OnInit {
 submitted = false;
inscForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.inscForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      repassword: ['', Validators.required],
    });
  }
  onSubmit() {
alert(this.inscForm.value['userName']);
}
}
