import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';


const urlpost=environment.appUrl+"/auth/password";
const urllogin=environment.appUrl+"/auth/login";
const urllogout=environment.appUrl+"/auth/logout";

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
    return !!localStorage.getItem('admin')
  }

}
