import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminServiceService } from './admin-service.service';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  adminService:AdminServiceService=inject(AdminServiceService);
  router:Router=inject(Router)
  user:UserServiceService=inject(UserServiceService)
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.adminService.IsAuthentication()){
        return true;
    }else if(this.user.IsAuthentication()){
      return true;
      }else{
        this.router.navigate(['/admin']);
        return false;
    }
  }
  
}
