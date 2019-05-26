import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
};


const url=environment.appUrl+"/getguide";
const url2=environment.appUrl+"/ratesort";
const url3=environment.appUrl+"/salarysort";
const url4=environment.appUrl+"/toursort";


@Injectable({
  providedIn: 'root'
})
export class GetGuidesService {
  url5 =environment.appUrl+"/guideProfile"
  constructor(private http:HttpClient) { }

  getGuides(){
    return this.http.get(url);
  }

  getRateSortGuides(){
    return this.http.get(url2);

  }

  getSalarySortGuides(){
    return this.http.get(url3);
  }

  getTourSortGuides(){
    return this.http.get(url4);
  }

  guideProfile(Id){
    const id = '5cc5891ad3f1ef43846da7a7'
    console.log('guide');
    const urln= `${this.url5}/${id}`
    console.log(urln)
    return this.http.get(urln) as Observable <any>; 

    
  }
}
