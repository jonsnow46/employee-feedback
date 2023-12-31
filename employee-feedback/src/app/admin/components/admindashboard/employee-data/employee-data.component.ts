import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminDataService } from 'src/app/admin/service/admin-data.service';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {

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

  constructor(private fb: FormBuilder, private dataService: AdminDataService) {

  }

  ngOnInit(): void {
    this.employeeDetailsForm = this.fb.group({
      _id: [''],
      employee_number: [''],
      employee_name: ['', [Validators.required]],
      joining_year: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
    this.getAllEmployees();
  }

  addNewEmployee() {
    this.employeeObj.employee_name = this.employeeDetailsForm.value.employee_name;
    this.employeeObj.joining_year = this.employeeDetailsForm.value.joining_year;
    this.employeeObj.email = this.employeeDetailsForm.value.email;
    this.employeeObj.password = this.employeeDetailsForm.value.password;
    this.employeeObj.employee_number = this.getEmployeeId();

    this.dataService.addEmployee(this.employeeObj).subscribe(res => {
      console.log("Employee added");
      this.ngOnInit();
    }, err => {
      console.log("Error while adding " + err);
    });
  }

  getEmployeeId(): number {
    if (this.allEmployees.length === 0) {
      return 1;
    }
    return this.allEmployees.length + 1;
  }

  getAllEmployees() {
    this.dataService.getAllEmployees().subscribe(res => {
      this.allEmployees = res;
    }, err => {
      console.log(err);
    })
  }

  getEmployee(employee: Employee) {
    this.employeeDetailsForm = this.fb.group({
      _id: employee._id,
      employee_number: employee.employee_number,
      employee_name: employee.employee_name,
      joining_year: employee.joining_year,
      email: employee.email,
      password: employee.password,

    })
  }

  updateEmployee() {
    this.employeeObj.employee_name = this.employeeDetailsForm.value.employee_name;
    this.employeeObj.joining_year = this.employeeDetailsForm.value.joining_year;
    this.employeeObj.email = this.employeeDetailsForm.value.email;
    this.employeeObj.password = this.employeeDetailsForm.value.password;
    this.employeeObj.employee_number = this.employeeDetailsForm.value.employee_number
    this.employeeObj._id = this.employeeDetailsForm.value._id;
    this.dataService.updateEmployee(this.employeeObj).subscribe(res => {
      console.log('Updated Successfully');
      this.ngOnInit();
    }, err => {
      console.log('Error while updating employee. ' + err);
    })
  }

  deleteEmployee(employee: Employee) {
    if (window.confirm('Are you sure you want to delete ' + employee.employee_name)) {
      this.dataService.deleteEmployee(employee._id).subscribe(res => {
        console.log("Employee Deleted");
        this.ngOnInit();
      }, err => {
        console.log("Error while deleting" + err);
      });
    }
  }
}
