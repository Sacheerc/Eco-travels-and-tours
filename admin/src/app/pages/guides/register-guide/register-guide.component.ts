import { Component, OnInit } from '@angular/core';
import { RegisterguidesService } from 'src/app/services/registerguides.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register-guide',
  templateUrl: './register-guide.component.html',
  styleUrls: ['./register-guide.component.css']
})

export class RegisterGuideComponent implements OnInit {
  name: string;
  address: string;
  phonenumber: number;
  dob: string;
  email: string;
  NIC: string;
  salary:number;
  imgurl:string;
  imagename: String;
  image: File;


  
  constructor(private regGuides: RegisterguidesService, private routs: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  createFormData(event) {
    this.image = event.target.files[0];
    this.imagename = event.target.files[0].name
  }


  // submitForm(){
    // var body = `name=${this.name}&address=${this.address}&phonenumber=${this.phonenumber}&email=${this.email}&dob=${this.dob}&nic=${this.NIC}&salary=${this.salary}&imgurl=${this.imgurl}&tourcount=0&rate=0`;
  //   console.log(body);
  //   this.regGuides.registerguide(body).subscribe((result)=>{
  //     this.routs.navigate(['/guides']);
  //     },
  //     (err)=>{
  //       alert(err.error)
  //       this.routs.navigate(['/guides']);
  //     }
  //   )

  submitForm() {
    var body = {
      name: this.name,
      address: this.address,
      phonenumber: this.phonenumber,
      dob: this.dob,
      email: this.email,
      NIC: this.NIC,
      salary: this.salary,
      imgurl: this.imagename,
      rate:0,
      tourcount:0
    }
    console.log('submit'+ body)
    this.regGuides.registerguide(body).subscribe((result) => {
      if (result) {
        this.regGuides.uploadimage(this.image).subscribe((result) => {
          alert("registered success")
          this.routs.navigate(['/guides']);
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
