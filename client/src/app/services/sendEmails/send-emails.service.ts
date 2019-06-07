import { Injectable } from '@angular/core';
import { HttpHeaders ,HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const url=environment.appUrl+"/sendmail/reverse"
const urlrefund=environment.appUrl+"/sendmail/refundreq"

@Injectable({
  providedIn: 'root'
})
export class SendEmailsService {

  constructor(private http:HttpClient) { }
 

sendreverseEmail(data){
  console.log('send to node')
  return this.http.post(url, data, httpOptions)
 
}

sendRefundEmail(data){
  console.log('send to node')
  return this.http.post(urlrefund, data, httpOptions)
}

}
