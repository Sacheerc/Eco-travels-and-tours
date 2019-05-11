import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment'

const urlGetAllReservations=environment.appUrl+"/reservation/reservations";
const urlFindReservations=environment.appUrl+"/reservation/reservations";
const urlCheckGuides=environment.appUrl+"/reservation/checkguides";
const urlAssignGuides=environment.appUrl+"/reservation/assignguides";

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private http: HttpClient) { }

  getAllReservations(){
    return this.http.get(urlGetAllReservations,{
        observe:'body',
        withCredentials:true,
        headers:new HttpHeaders().append('Content-Type','application/x-www-form-urlencoded')
      });
  }

  findReservation(id) {
    return this.http.post(urlFindReservations, id, {
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

  getInvalidGuides(date) {
    return this.http.post(urlCheckGuides, date, {
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

  assignGuides(data){
    return this.http.post(urlAssignGuides, data, {
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

}
