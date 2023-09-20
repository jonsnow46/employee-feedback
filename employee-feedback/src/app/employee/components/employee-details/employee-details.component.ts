import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeDataService } from 'src/app/employee/service/employee-data.service';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeDetailsForm = new FormGroup({
    _id: new FormControl(),
    employee_number: new FormControl(),
    employee_name: new FormControl(),
    joining_year: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  })

  employeeObj: Employee = {
    _id: '',
    employee_number: 0,
    employee_name: '',
    joining_year: 0,
    email: '',
    password: ''
  }
  allEmployees: Employee[] = [];
  username: string = '';
  constructor(private fb: FormBuilder, private dataService: EmployeeDataService) {

  }

  ngOnInit(): void {
    this.employeeDetailsForm = this.fb.group({
      _id: [''],
      employee_number: [''],
      employee_name: ['', [Validators.required]],
      joining_year: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.username = <string>localStorage.getItem('username');
    this.getEmployeeDetails();
  }
  getEmployeeDetails() {
    this.dataService.getAllEmployeeDetails(this.username).subscribe(res => {
      this.allEmployees = res;
    }, err => {
      console.log(err);
    })
  }

}
