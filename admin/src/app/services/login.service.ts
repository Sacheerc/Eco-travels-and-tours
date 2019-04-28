import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
};

const url="http://localhost:3000/auth/login";

@Injectable({
  providedIn: 'root'
})


export class LoginService {
 
  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post(url, data, httpOptions)
  }

}
