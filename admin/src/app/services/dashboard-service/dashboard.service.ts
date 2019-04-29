import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded','NoAuth':'True'})
};

const url="http://localhost:3000/dashboard";
// const urllogin="http://localhost:3000/auth/login";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { 
  }

  getdashboard(){
    return this.http.get(url);
  }

  
}
