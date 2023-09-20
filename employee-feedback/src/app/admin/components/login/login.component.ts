import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminAuthService } from '../../service/admin-auth.service';

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
  constructor(private fb: FormBuilder, private adminAuth : AdminAuthService) { }
  
  ngOnInit(): void {
    this.adminLoginData = this.fb.group({
      username: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    });
  }

  adminLogin(){
    this.adminAuth.adminLogin(this.adminLoginData.value.username,this.adminLoginData.value.password)
  }

}
