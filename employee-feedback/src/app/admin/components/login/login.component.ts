import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  adminLoginData = new FormGroup({
    username: new FormControl,
    password: new FormControl
  })
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.adminLoginData = this.fb.group({
      username: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    });
  }

  adminLogin(){
    console.log(this.adminLoginData.value.username + " "+ this.adminLoginData.value.password);
  }

}
