import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';

const urlGetAllRateGuides=environment.appUrl+"/RateGuide/RateGuide";
const urlFindRateGuides=environment.appUrl+"/RateGuide/RateGuide";


@Injectable({
  providedIn: 'root'
})
export class RateGuideService {

  constructor(private http: HttpClient) { }

  getAllRateGuides(){
    return this.http.get(urlGetAllRateGuides,{
        observe:'body',
        withCredentials:true,
        headers:new HttpHeaders().append('Content-Type','application/x-www-form-urlencoded')
      });
  }

  findRateGuides(id) {
    return this.http.post(urlFindRateGuides, id, {
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
}


