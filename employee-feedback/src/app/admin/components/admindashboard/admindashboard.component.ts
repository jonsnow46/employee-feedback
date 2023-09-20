import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  employee: boolean = false;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.showEmployeeData();
  }

  setoff() {
    this.employee = false;
  }

  showEmployeeData() {
    this.setoff();
    this.employee = true;
  }

  signOut() {
    localStorage.removeItem('token');
    this.router.navigate(['admin/login']);
  }
}
