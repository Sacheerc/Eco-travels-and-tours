import { Injectable } from '@angular/core';
import { Observable, of, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'

const urlRegGuide = environment.appUrl + "/regGuide";
const urlUploadImage = environment.appUrl + "/regGuide/uploadimage";
const urlUpGuide = environment.appUrl + "/regGuide/update";


@Injectable({
  providedIn: 'root'
})
export class RegisterguidesService {

  constructor(private http: HttpClient) { }


  registerguide(data) {
    return this.http.post(urlRegGuide, data, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }
    )
  }

  uploadimage(image) {
    var formData = new FormData()
    formData.append('file', image)
    return this.http.post(urlUploadImage, formData)
  }


  updateGuide(data) {
    console.log('send to node')
    return this.http.post(urlUpGuide, data, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }
    )
  }

  


}

