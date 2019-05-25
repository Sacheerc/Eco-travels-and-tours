import { Injectable } from '@angular/core';
import { Observable, of, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

const urlRegGuide = environment.appUrl + "/regGuide";
const urlImage = environment.appUrl + "/image";
const urlUploadImage = environment.appUrl + "/image/uploadimage";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }


  setimagedata(data) {
    return this.http.post(urlRegGuide, data, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }
    )
  }

  uploadimage(image,name) {
    var formData = new FormData()
    formData.append('file', image,name)
    return this.http.post(urlUploadImage, formData)
  }

  getImages(){
    return this.http.get(urlImage);
  }
}
