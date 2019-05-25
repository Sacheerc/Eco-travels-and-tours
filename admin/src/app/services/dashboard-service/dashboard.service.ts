import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';


const url=environment.appUrl+"/dashboard";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { 
  }
  public baseUrl=environment.appUrl+"/admin/";

  getdashboard(){
    return this.http.get(url,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/x-www-form-urlencoded')
    });
  }

  getIncome(){
    return this.http.get(this.baseUrl+"income");
  }

  getReservations(){
    return this.http.get(this.baseUrl+"reservations");
  }

  getOngoingTours(){
    return this.http.get(this.baseUrl+"ongoing");
  }
  
  getDestIncome(){
    return this.http.get(this.baseUrl+"destIncome");
  }

}
