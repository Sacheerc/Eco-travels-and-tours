import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded','NoAuth':'True'})
};

const url="http://localhost:3000/dashboard";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { 
  }

  getdashboard(){
    return this.http.get(url,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/x-www-form-urlencoded')
    });
  }

  getIncome(){
    return this.http.get("http://localhost:3000/admin/income");
  }

  
}
