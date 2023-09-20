import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeAuthService } from '../../service/employee-auth.service';


@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  loginData = new FormGroup({
    username: new FormControl,
    password: new FormControl
  })

  constructor(private fb: FormBuilder,private employeeAuth : EmployeeAuthService ) { }

  ngOnInit(): void {
    this.loginData = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  employeeLogin() {
    this.employeeAuth.employeeLogin(this.loginData.value.username, this.loginData.value.password)
  }

}