import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ]
})
export class AdminModule { }
