import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteResolverService implements Resolve<any> {

  constructor(private authService: AuthService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    //  fetch the user's role from the backend
    return this.authService.getUserRole();




    
  }
  
}
