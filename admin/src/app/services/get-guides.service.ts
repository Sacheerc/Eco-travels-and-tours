import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
};


const url="http://localhost:3000/getguide";
const url2="http://localhost:3000/ratesort";
const url3="http://localhost:3000/salarysort";
const url4="http://localhost:3000/toursort";


@Injectable({
  providedIn: 'root'
})
export class GetGuidesService {
  url5 ="http://localhost:3000/guideProfile"
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
