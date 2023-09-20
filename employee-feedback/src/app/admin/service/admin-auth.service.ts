import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment'
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

  constructor(private http : HttpClient) { }

  //admin login
  adminLogin(username : string, password :string){
    if(username === this.adminUsername && password === this.adminPassword){
      console.log("Login successfull");
    } else {
      alert('Incorrect credentials');
      console.log('Login failed');
    }

  }
}
