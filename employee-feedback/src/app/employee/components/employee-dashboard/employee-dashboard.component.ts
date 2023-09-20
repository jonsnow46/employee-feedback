import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {


  employee_reviews: boolean = false;
  employee_details: boolean = false;
  performance_review: boolean = false;
  constructor(private router: Router) { 
  }

  ngOnInit(): void {
    this.showEmployeeDetails();
  }

  setoff() {
    this.employee_reviews = false;
    this.performance_review = false;
    this.employee_details = false;
  }

  showEmployeeReviews() {
    this.setoff();
    this.employee_reviews = true;
  }
  showEmployeeDetails() {
    this.setoff();
    this.employee_details = true;
  }

  showPerformanceReview() {
    this.setoff();
    this.performance_review = true;
  }

  signOut() {
    localStorage.removeItem('token');
    this.router.navigate(['employee/login']);
  }

}
