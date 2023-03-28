
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


@Injectable()
export class LoginGuardian implements CanActivate{

    constructor(private router:Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        let userEmail = localStorage.getItem('userEmail');
        if(userEmail == null){
            this.router.navigate(['login']);
            return false;
        }
    
        return true;
    }

}