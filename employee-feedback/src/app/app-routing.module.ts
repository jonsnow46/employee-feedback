import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/components/login/login.component';
import { AdmindashboardComponent } from './admin/components/admindashboard/admindashboard.component';
import { adminGuard } from './service/admin.guard';

const routes: Routes = [
  {path:'admin',component: AdminComponent, children :[
    {path: 'login',component: LoginComponent}, 
    {path: 'admin-dashboard',component: AdmindashboardComponent, canActivate:[adminGuard]} 
  ]},
  {path :'', redirectTo :'admin/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
