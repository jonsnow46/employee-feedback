import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/components/login/login.component';

const routes: Routes = [
  {path:'admin',component: AdminComponent, children :[
    {path: 'login',component: LoginComponent} 
  ]},
  {path :'', redirectTo :'admin', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
