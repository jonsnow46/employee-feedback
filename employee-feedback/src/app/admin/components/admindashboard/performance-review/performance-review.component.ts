import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AdminDataService } from 'src/app/admin/service/admin-data.service';
import { PerformanceReview } from 'src/app/model/performance-review';
import { EmployeeDataComponent } from '../employee-data/employee-data.component';
import { Employee } from 'src/app/model/employee';

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

  constructor(private fb: FormBuilder, private dataService: AdminDataService) {

  }
  ngOnInit(): void {

    this.performanceReviewForm = this.fb.group({
      _id: [''],
      employee_number: [''],
      employee_name: ['', [Validators.required]],
      reviewer_name: ['', [Validators.required]],
      performance_review: ['pending', [Validators.required]],
      feedback: ['pending'],
    })
    this.getAllPerformances();
    this.getAllEmployees();
  }

  addNewPerformance() {
    this.performanceObj.employee_number = 2;
    this.performanceObj.employee_name = this.performanceReviewForm.value.employee_name;
    this.performanceObj.reviewer_name = this.performanceReviewForm.value.reviewer_name;
    this.performanceObj.performance_review = this.performanceReviewForm.value.performance_review;
    this.performanceObj.feedback = this.performanceReviewForm.value.feedback;
    this.dataService.addPerformance(this.performanceObj).subscribe(res => {
      console.log("Performance added");
      this.ngOnInit();
    }, err => {
      console.log("Error while adding " + err);
    });
  }

  getEmployeePerformances(employee : Employee) {
    this.dataService.getEmployeePerformances(employee).subscribe(res => {
      this.allPerformance = res;
    }, err => {
      console.log(err);
    })
  }

  getAllPerformances() {
    this.dataService.getAllPerformances().subscribe(res => {
      this.allPerformance = res;
    }, err => {
      console.log(err);
    })
  }

  
  getAllEmployees() {
    this.dataService.getAllEmployees().subscribe(res => {
      this.allEmployees = res;
    }, err => {
      console.log(err);
    })
  }

  getPerformance(performance: PerformanceReview) {
    this.performanceReviewForm = this.fb.group({
      _id: performance._id,
      employee_number: performance.employee_number,
      employee_name: performance.employee_name,
      reviewer_name: performance.reviewer_name,
      performance_review: performance.performance_review,
      feedback: performance.feedback,

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
  
  deletePerformance(performance : PerformanceReview){
    if(window.confirm('Are you sure you want to delete '+performance.employee_name)){
      this.dataService.deletePerformance(performance._id).subscribe(res => {
        console.log("Employee Deleted");
        this.ngOnInit();
      },err =>{
        console.log("Error while deleting"+err);
      });
    }
  }

}