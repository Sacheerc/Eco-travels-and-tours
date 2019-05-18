import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {LoginService} from '../services/login/login.service'

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private loginService:LoginService,private router:Router){}

  canActivate():boolean{
    console.log(this.loginService.isloggedin())
    if(this.loginService.isloggedin()){
      return true;
    }else{
      this.router.navigate(['/']); 
      // location.reload()
      return false;
    }
  }
}