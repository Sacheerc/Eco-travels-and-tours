import { Component, OnInit } from '@angular/core';
import { PackageServiceService } from 'src/app/services/package-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {

  package: string;
  location: string;
  description: string;
  price: number;
  reviews: number;
  duration: number;
  hotels: string[];
  maxguest: number;
  imgurl:string;
  imagename: String;
  image: File;

  constructor(private addPackage: PackageServiceService, private routs: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  createFormData(event) {
    this.image = event.target.files[0];
    this.imagename = event.target.files[0].name
  }


  submitForm() {
    var body = {
      package: this.package,
      location: this.location,
      description: this.description,
      price: this.price,
      reviews: this.reviews,
      duration: this.duration,
      hotels: this.hotels,
      maxguest: this.maxguest,
      coverimage: this.package
    }
    this.addPackage.addpackage(body).subscribe((result) => {
      if (result) {
        this.addPackage.uploadimage(this.image,this.package).subscribe((result) => {
          alert("added success")
          this.routs.navigate(['/packages']);
        },
          (err) => {
            console.log(err.error)
          }
        )
      }
    },
      (err) => {
        console.log(err.error)
      }
    )
    }
}
