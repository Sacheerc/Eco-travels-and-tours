import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
};

const url="http://localhost:3000/tourpackage";

@Injectable({
  providedIn: 'root'
})

export class TourPackagesService {

  private packages: any;

  constructor(private http: HttpClient,private router:Router) {
   }

  getpackages(){
    return this.http.get(url);
  }


}
