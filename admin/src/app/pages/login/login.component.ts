import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';


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

  submitForm(){
    var body = `username=${this.email}&password=${this.password}`;
    this.loginService.login(body).subscribe((result)=>{
      localStorage.setItem('admin', JSON.stringify(result)); 
      this.router.navigate(['/dashboard']);
      },
      (err)=>{
        console.log(err.error)
        this.router.navigate(['/']);
      }
     )
  }

}
