import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/components/login/login.component';
import { AdmindashboardComponent } from './admin/components/admindashboard/admindashboard.component';
import { adminGuard } from './service/admin.guard';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeLoginComponent } from './employee/components/employee-login/employee-login.component';
import { employeeGuard } from './service/employee.guard';
import { EmployeeDashboardComponent } from './employee/components/employee-dashboard/employee-dashboard.component';

const routes: Routes = [
  {path:'admin',component: AdminComponent, children :[
    {path: 'login',component: LoginComponent}, 
    {path: 'admin-dashboard',component: AdmindashboardComponent, canActivate:[adminGuard]} 
  ]},
  {path:'employee',component: EmployeeComponent, children :[
    {path: 'login',component: EmployeeLoginComponent}, 
    {path: 'employee-dashboard',component: EmployeeDashboardComponent, canActivate:[employeeGuard]} 
  ]},
  {path :'', redirectTo :'employee/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
