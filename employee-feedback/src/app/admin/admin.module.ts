import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { EmployeeDataComponent } from './components/admindashboard/employee-data/employee-data.component';
import { PerformanceReviewComponent } from './components/admindashboard/performance-review/performance-review.component' 



@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    AdmindashboardComponent,
    EmployeeDataComponent,
    PerformanceReviewComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule
  ]
})
export class AdminModule { }
