import { Component, OnInit,Input } from '@angular/core';
import { RegisterguidesService } from 'src/app/services/registerguides.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-guide',
  templateUrl: './register-guide.component.html',
  styleUrls: ['./register-guide.component.css']
})
export class RegisterGuideComponent implements OnInit {
  name:string;
  address:string;
  phonenumber:number;
  age:number;
  email:string;
  NIC: string;

  @Input() state:boolean;

  constructor(private regGuides:RegisterguidesService, private routs:Router) { }

  ngOnInit() {
  }

  submitForm(){
    var body = `name=${this.name}&address=${this.address}&pnumber=${this.phonenumber}&email=${this.email}&age=${this.age}&nic=${this.NIC}`;
    this.regGuides.login(body).subscribe((result)=>{
      this.routs.navigate(['/guides']);
      },
      (err)=>{
        alert(err.error)
        this.routs.navigate(['/']);
      }
     )
  }

  close(){
    return this.state=false;
  }

}
