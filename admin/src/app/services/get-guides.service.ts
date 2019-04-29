import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
};


const url="http://localhost:3000/getguide";

@Injectable({
  providedIn: 'root'
})
export class GetGuidesService {

  constructor(private http:HttpClient) { }

  getGuides(){
    return this.http.get(url);
  }
}
