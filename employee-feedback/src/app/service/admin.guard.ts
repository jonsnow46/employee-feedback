import { CanActivateFn, Router } from '@angular/router';
import { AdminAuthService } from '../admin/service/admin-auth.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {

  const adminService: AdminAuthService = inject(AdminAuthService);
  const router : Router = inject(Router);
  if (adminService.isAdminLoggedIn() === true){
    return true;
  }
  route
  return false;
};
