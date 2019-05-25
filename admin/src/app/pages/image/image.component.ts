import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {environment} from 'src/environments/environment'


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {

  name: string;
  // address: string;
  // phonenumber: number;
  // dob: string;
  // email: string;
  // NIC: string;
  // salary: number;
  imagename: String;
  image: File;

  img:any;
  url1=environment.appUrl+"/covers/img_bg_1.jpg"
  url2=environment.appUrl+"/covers/img_bg_2.jpg"
  url3=environment.appUrl+"/covers/img_bg_3.jpg"
  url4=environment.appUrl+"/covers/img_bg_4.jpg"

  url_page1=environment.appUrl+"/covers/img_bg_cover1.jpg"
  url_page2=environment.appUrl+"/covers/img_bg_cover2.jpg"
  url_page3=environment.appUrl+"/covers/img_bg_cover3.jpg"
  url_page4=environment.appUrl+"/covers/img_bg_cover4.jpg"
  url_page5=environment.appUrl+"/covers/img_bg_cover5.jpg"
  url_page6=environment.appUrl+"/covers/img_bg_cover6.jpg"

  constructor(  private images: ImageService,
                private routs: Router,
                private http: HttpClient,
                

              ) { }

  
  

  ngOnInit() {
    console.log(this.url1)
    this.images.getImages().subscribe((result)=>{
      this.img=result
      console.log(this.img)
      },
      (err)=>{
       console.log(err.error)
      }
     )
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
    this.images.uploadimage(this.image,this.name).subscribe((result) => {
      alert("registered success")
      this.routs.navigate(['/image']);
    },
      (err) => {
        console.log(err.error)
      }
    )
  }

  update_home_cover1() {
    this.images.uploadimage(this.image,this.name).subscribe((result) => {
      alert("registered success")
      this.routs.navigate(['/image']);
    },
      (err) => {
        console.log(err.error)
      }
    )
  }

}