import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { EmployeeAuthService } from '../employee/service/employee-auth.service';

export const employeeGuard: CanActivateFn = (route, state) => {

  const  employeeService : EmployeeAuthService = inject(EmployeeAuthService);
  const router : Router = inject(Router);
  if (employeeService.isEmployeeLoggedIn()=== true){
    return true;
  }
  route
  return false;
};
