import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url ="http://localhost:3000/client"

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private http:HttpClient) { }

getclientdata(ID){
  console.log('getclient called')
  return this.http.get(url+'/'+ID);
}


}

