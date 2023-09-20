import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeLoginComponent } from './components/employee-login/employee-login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { EmployeeDataComponent } from './components/employee-data/employee-data.component';
import { PerformanceReviewComponent } from './components/performance-review/performance-review.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeLoginComponent,
    EmployeeDashboardComponent,
    EmployeeDataComponent,
    PerformanceReviewComponent,
    EmployeeDetailsComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule
  ]
})
export class EmployeeModule { }
