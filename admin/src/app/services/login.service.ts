import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
// import {RequestOptions, Request, RequestMethod} from '@angular/http';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded','NoAuth':'True'})
};


const urlpost="http://localhost:3000/auth/password";
const urllogin="http://localhost:3000/auth/login";
const urllogout="http://localhost:3000/auth/logout";

@Injectable({
  providedIn: 'root'
})


export class LoginService {
 
  constructor(private http: HttpClient) { }

  getloginpage(){
    return this.http.get(urllogin,{
        observe:'body',
        withCredentials:true,
        headers:new HttpHeaders().append('Content-Type','application/x-www-form-urlencoded')
      });
  }

  logout(){
    return this.http.get(urllogout,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/x-www-form-urlencoded')
    });
  }

  login(data) {
    return this.http.post(urlpost, data, {
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/x-www-form-urlencoded')
    })
  }

  isloggedin(){
    return !!localStorage.getItem('user')
  }

}
