import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import {environment} from '../../../environments/environment';

const urlcheckreservation=environment.appUrl+"/reservation/check";

@Injectable({
  providedIn: 'root'
})


export class ReservationsService {

  constructor(private http: HttpClient,private router:Router) { }

  findReservations(data) {
    return this.http.post(urlcheckreservation, data, {
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
}
