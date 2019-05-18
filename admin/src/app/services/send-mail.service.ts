import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
};
const url="http://localhost:3000/sendmail";

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  constructor(private http:HttpClient) { }

  sendMail(data){

    console.log(" send to node");
    return this.http.post(url, data, httpOptions)
  }

}
