import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  name: string;
  address: string;
  phonenumber: number;
  dob: string;
  email: string;
  NIC: string;
  salary: number;
  imagename: String;
  image: File;

  constructor(private images: ImageService, private routs: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  createFormData(event) {
    this.image = event.target.files[0];
    this.imagename = event.target.files[0].name
  }

  submitForm() {
    // var body = {
    //   name: this.name,
    //   address: this.address,
    //   phonenumber: this.phonenumber,
    //   dob: this.dob,
    //   email: this.email,
    //   NIC: this.NIC,
    //   salary: this.salary,
    //   imgurl: this.imagename
    // }
    // this.images.setimagedata(body).subscribe((result) => {
    //   if (result) {
    //     this.images.uploadimage(this.image).subscribe((result) => {
    //       alert("registered success")
    //       this.routs.navigate(['/image']);
    //     },
    //       (err) => {
    //         console.log(err.error)
    //       }
    //     )
    //   }
    // },
    //   (err) => {
    //     console.log(err.error)
    //   }
    // )
    this.images.uploadimage(this.image).subscribe((result) => {
      alert("registered success")
      this.routs.navigate(['/image']);
    },
      (err) => {
        console.log(err.error)
      }
    )
  }
}