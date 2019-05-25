import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
};
const url=environment.appUrl+"/sendmail";

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
