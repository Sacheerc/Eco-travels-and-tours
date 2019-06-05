import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../src/environments/environment'



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const urlsendmail=environment.appUrl+"/sendmail";
const url2=environment.appUrl+"/sendmail/broadcast"
const urlassignGuide =  environment.appUrl+"/sendmail/assignguide"
const urlremoveGuide =  environment.appUrl+"/sendmail/removeguide"
const urlRefundTour =  environment.appUrl+"/sendmail/confirmrefund"
// const url=environment.appUrl+"/sendmail";


@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  constructor(private http:HttpClient) { }

  sendMail(data){

    console.log(" send to node");
    return this.http.post(urlsendmail, data, httpOptions)
  }
  broadcastmails(data){
    console.log(" send to node");
    return this.http.post(url2, data, httpOptions)
  }

  sendAssinedEmail(data){
    console.log(" send to node");
    return this.http.post(urlassignGuide, data, httpOptions)
  }

  removeAssinedGuideEmail(data){
    console.log(" send to node");
    return this.http.post(urlremoveGuide, data, httpOptions)
  }
  
  refundTourEmail(data){
    // email send by admin to client confirming canselation
    console.log(" send to node");
    return this.http.post(urlRefundTour, data, httpOptions)
  }

}
