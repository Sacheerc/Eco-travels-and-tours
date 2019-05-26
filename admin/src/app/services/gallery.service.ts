import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

const urlgallery = environment.appUrl + "/gallery";
const urlUploadImage = environment.appUrl + "/gallery/uploadimage";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }
  public baseUrl=environment.appUrl+"/admin/";
  
  getPackageIncome(){
    return this.http.get(this.baseUrl+"pkgIncome");
  }

  getPackageTable(){
    return this.http.get(this.baseUrl+"pkgTable");
  }


  addimage(data) {
    return this.http.post(urlgallery, data, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }
    )
  }

  // uploadimage(image) {
  //   var formData = new FormData()
  //   formData.append('file', image)
  //   return this.http.post(urlUploadImage, formData)
  // }

  uploadimage(image,name) {
    var formData = new FormData()
    formData.append('file', image,name)
    return this.http.post(urlUploadImage, formData)
  }


  getgallery(){
    return this.http.get(urlgallery);
  }

  


}
