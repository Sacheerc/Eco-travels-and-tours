import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

const urlcheckreservation = environment.appUrl + "/reservation/check";
const urlmyreservations = environment.appUrl + "/reservation/myreservations";
const urlgetguides = environment.appUrl + "/getguide";
const urlChangeStatus = environment.appUrl + "/reservation/changestatus"
const urlMakeReservation = environment.appUrl + "/reservation/reserve"

@Injectable({
  providedIn: 'root'
})


export class ReservationsService {

  constructor(private http: HttpClient, private router: Router) { }

  findReservations(data) {
    return this.http.post(urlcheckreservation, data, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  makeReservation(data) {
    return this.http.post(urlMakeReservation, data, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  getMyReservations(data) {
    data = {
      clientid: data
    }
    return this.http.post(urlmyreservations, data, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  getguides() {
    return this.http.get(urlgetguides, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  changeStatus(data) {
    return this.http.post(urlChangeStatus, data, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }


}
