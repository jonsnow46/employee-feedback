import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { Observable } from 'rxjs';
export interface employee {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeAuthService {

  credentialsUrl: string = 'http://localhost:3001/admin/employee';
  username: string = '';
  password: string = '';
  employeeCrednt: Employee[] =[];
  constructor(private http: HttpClient, private router: Router) { }

  getEmployeeCredentials(username: String): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.credentialsUrl + '/' + username);
  }

  //employee login
  async employeeLogin(username: string, password: string) {
    
    this.getEmployeeCredentials(username).subscribe(res => {
      this.employeeCrednt = res;
    }, err => {
      console.log(err);
    });
    setTimeout(() => {
      if (this.employeeCrednt.length>0) {
        this.username = this.employeeCrednt[0].email;
        this.password = this.employeeCrednt[0].password;
      }
      if (username === this.username && password === this.password) {
        console.log("Login successfull",);
        localStorage.setItem('token', (Math.random() + 1).toString(36).substring(7));
        localStorage.setItem('username', this.employeeCrednt[0].employee_name);
        this.router.navigate(['/employee/employee-dashboard']);
      } else {
        alert('Incorrect credentials');
        console.log('Login failed');
        this.router.navigate(['/employee/login']);
      }
    }, 600);



  }

  //check employee is logged in
  isEmployeeLoggedIn(): Boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}
