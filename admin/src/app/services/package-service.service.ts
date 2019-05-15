import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackageServiceService {

  constructor(private http: HttpClient) { }
  public baseUrl="http://localhost:3000/admin/";
  
  getPackageIncome(){
    return this.http.get(this.baseUrl+"pkgIncome");
  }

  getPackageTable(){
    return this.http.get(this.baseUrl+"pkgTable");
  }

}
