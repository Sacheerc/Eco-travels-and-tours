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
  public baseUrl="http://localhost:3000/admin/";

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

  getCancellations(){
    return this.http.get(this.baseUrl+'cancel');
  }

}
