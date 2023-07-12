import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

  
    const allowedRoles = route.data['allowedRoles'] as string[]; // Access the allowedRoles from route data

    //Retrieve the user's role from the authentication token or backend
    const token = localStorage.getItem('token') || ''; 
    const decodedToken: any = jwt_decode(token);
    const role = decodedToken.role[0];

    
    // Check if the user's role is included in the allowed roles
    if (allowedRoles.includes(role)) {
      return true;
    } else {
      this.router.navigate(['/unauthorized']); // Redirecting to unauthorized page
      return false;
    }
  }


  //Router Resolver

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const allowedRoles = route.data['allowedRoles'] as string[];

    // Retrieve the user's role from the authentication token or backend
    const token = localStorage.getItem('token') || ''; 
    const decodedToken: any = jwt_decode(token);
    const role = decodedToken.role[0];

    // Check if the user's role is included in the allowed roles
    if (allowedRoles.includes(role)) {
      return of(null); // Resolve with a null value
    } else {
      this.router.navigate(['/unauthorized']);
      return of(null);
    }
  }

}

