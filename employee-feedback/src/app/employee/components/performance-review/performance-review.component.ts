import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeDataService } from 'src/app/employee/service/employee-data.service';
import { PerformanceReview } from 'src/app/model/performance-review';


@Component({
  selector: 'app-performance-review',
  templateUrl: './performance-review.component.html',
  styleUrls: ['./performance-review.component.css']
})
export class PerformanceReviewComponent implements OnInit {

  performanceReviewForm = new FormGroup({
    _id: new FormControl(),
    employee_number: new FormControl(),
    employee_name: new FormControl(),
    reviewer_name: new FormControl(),
    performance_review: new FormControl(),
    feedback: new FormControl(),
  })

  performanceObj: PerformanceReview = {
    _id: '',
    employee_number: 0,
    employee_name: '',
    reviewer_name: '',
    performance_review: '',
    feedback: ''
  }
  allPerformance: PerformanceReview[] = [];
  allEmployees:any[] =[];

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
    });

    this.username = <string>localStorage.getItem('username');
    this.getPendingPerformances();
    this.getAllEmployees();
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
  
  
  getAllEmployees() {
    this.dataService.getAllEmployees().subscribe(res => {
      this.allEmployees = res;
    }, err => {
      console.log(err);
    })
  }

  getPendingPerformances() {
    this.dataService.getPendingPerformance('pending/'+this.username).subscribe(res => {
      this.allPerformance = res;
    }, err => {
      console.log(err);
    })
  }

  updateEmployee() {
    this.performanceObj.employee_name = this.performanceReviewForm.value.employee_name;
    this.performanceObj.reviewer_name = this.performanceReviewForm.value.reviewer_name;
    this.performanceObj.performance_review = this.performanceReviewForm.value.performance_review;
    this.performanceObj.feedback = this.performanceReviewForm.value.feedback;
    this.performanceObj._id = this.performanceReviewForm.value._id;
    this.dataService.updatePerformance(this.performanceObj).subscribe(res => {
      console.log('Updated Successfully');
      this.ngOnInit();
    }, err => {
      console.log('Error while updating employee. ' + err);
    })
  }

}
{

}
