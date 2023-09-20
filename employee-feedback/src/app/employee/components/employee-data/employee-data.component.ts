import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeDataService } from 'src/app/employee/service/employee-data.service';
import { PerformanceReview } from 'src/app/model/performance-review';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {

  performanceReviewForm = new FormGroup({
    _id: new FormControl(),
    employee_number: new FormControl(),
    employee_name: new FormControl(),
    reviewer_name: new FormControl(),
    performance_review: new FormControl(),
    feedback: new FormControl(),
  })

  allPerformance: PerformanceReview[] = [];

  username: string = '';

  constructor(private fb: FormBuilder, private dataService: EmployeeDataService) {

  }

  ngOnInit(): void {
    
    this.performanceReviewForm = this.fb.group({
      _id: [''],
      employee_number: [''],
      employee_name: ['', [Validators.required]],
      reviewer_name: ['', [Validators.required]],
      performance_review: ['pending', [Validators.required]],
      feedback: ['pending', [Validators.required]],
    })

    this.username = <string>localStorage.getItem('username');
    this.getEmployeePerformances();
  }
  getEmployee(employee: PerformanceReview) {

    this.performanceReviewForm = this.fb.group({
      _id: employee._id,
      employee_number: employee.employee_number,
      employee_name: employee.employee_name,
      reviewer_name: employee.reviewer_name,
      performance_review: employee.performance_review,
      feedback: employee.feedback,

    })
  }
  
  getEmployeePerformances() {
    this.dataService.getEmployeePerformances(this.username).subscribe(res => {
      this.allPerformance = res;
    }, err => {
      console.log(err);
    })
  }


}
