import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
};
const url="http://localhost:3000/regGuide";


@Injectable({
  providedIn: 'root'
})
export class RegisterguidesService {

  constructor(private http:HttpClient) { }


registerguide(data){

  console.log(data);
  return this.http.post(url, data, httpOptions)
}


}

