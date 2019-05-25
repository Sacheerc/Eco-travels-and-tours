import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

const urlAddPackage = environment.appUrl + "/tourPackage";
const urlUploadImage = environment.appUrl + "/tourPackage/uploadimage";

@Injectable({
  providedIn: 'root'
})
export class PackageServiceService {

  constructor(private http: HttpClient) { }
  public baseUrl="http://localhost:3000/admin/";
  
  getPackageIncome(){
    return this.http.get(this.baseUrl+"pkgIncome");
  }

  getPackageTable(){
    return this.http.get(this.baseUrl+"pkgTable");
  }


  addpackage(data) {
    return this.http.post(urlAddPackage, data, {
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

}
