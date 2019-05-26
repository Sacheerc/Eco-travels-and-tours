import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

declare var dangerNotification:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  email:string;
  password:string;
  currentuser:any
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {
    this.loginService.getloginpage().subscribe((result)=>{
      if(result){
        this.currentuser=result
        this.router.navigate(['/dashboard']);
      }
      },
      (err)=>{
       console.log(err.error)
      }
     )
   }
   dangerNotification(top,center,message){
    dangerNotification(top,center,message);
  }

   validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
  submitForm(){

    var body = `username=${this.email}&password=${this.password}`;
    this.loginService.login(body).subscribe((result)=>{
      localStorage.setItem('admin', JSON.stringify(result)); 
      this.router.navigate(['/dashboard']);
      },
      (err)=>{
        if(this.email.length==0)
        {
          this.dangerNotification('top','center','Please enter the email');
        }
        else if (!(this.validateEmail(this.email))){
          this.dangerNotification('top','center','Please enter a valid email');
        }
        else if(this.password.length==0)
        {
          this.dangerNotification('top','center','Please enter the password');
        }
        else{
        this.dangerNotification('top','center','Invalid username or password. Please try again');
        console.log(err.error);
        this.router.navigate(['/']);
        }
      }
     )
  }

}
