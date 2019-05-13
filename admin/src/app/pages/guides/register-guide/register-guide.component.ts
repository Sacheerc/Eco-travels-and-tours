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
  name:string;
  address:string;
  phonenumber:number;
  dob:string;
  email:string;
  NIC: string;
  salary:number;
 
 

  // fileData=null;
  constructor(private regGuides:RegisterguidesService, private routs:Router, private http: HttpClient) { }

  ngOnInit() {
  }

  // fileProgress(fileInput: any){
  //   this.fileData=<File>fileInput.target.files[0];
  // }


  submitForm(){
    var body = `name=${this.name}&address=${this.address}&phonenumber=${this.phonenumber}&email=${this.email}&dob=${this.dob}&nic=${this.NIC}&salary=${this.salary}&tourcount=0&rate=0`;
    console.log(body);
    this.regGuides.registerguide(body).subscribe((result)=>{
      this.routs.navigate(['/guides']);
      },
      (err)=>{
        alert(err.error)
        this.routs.navigate(['/guides']);
      }
    )

     // image uploading ,should let someone to check
    //  const formData = new FormData();
    //  formData.append('file', this.fileData);
    //  this.http.post('src/assets/profileImages',formData).subscribe(res => {
    //    console.log(res);
    //    alert('SUCCESS!');
    //  })


  }

  

}
