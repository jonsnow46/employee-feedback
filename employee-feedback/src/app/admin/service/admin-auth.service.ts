import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment'
import { Router } from '@angular/router';
export interface admin {
  username : string,
  password : string
}

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  adminUsername : string = environment.adminUsername;
  adminPassword : string = environment.adminPassword;

  constructor(private http : HttpClient, private router : Router) { }

  //admin login
  adminLogin(username : string, password :string){
    if(username === this.adminUsername && password === this.adminPassword){
      console.log("Login successfull");
      localStorage.setItem('token',(Math.random() +1).toString(36).substring(7))
      this.router.navigate(['/admin/admin-dashboard']);
    } else {
      alert('Incorrect credentials');
      console.log('Login failed');
      this.router.navigate(['/admin/login']);
    }

  }

  //check admin is logged in
  isAdminLoggedIn(): Boolean{
    if(localStorage.getItem('token')){
      return true;
    }
    return false;
  }
}
