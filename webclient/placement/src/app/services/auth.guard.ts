import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Data} from './data.service';
// auhentication gaurd if without login user will try to access differnt menu links navigate it to login page

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private router:Router,private data:Data){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        
        if (localStorage.getItem('currentUser')){
            //logged in user return true
            return true; 
  }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        //this.data.openSnackBar('Please Login!!',"OK");
        return false;

    }
}