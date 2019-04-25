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

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() { }

  submitForm(){
    var body = `email=${this.email}&password=${this.password}`;
    this.loginService.login(body).subscribe((result)=>{
      this.router.navigate(['/dashboard']);
      },
      (err)=>{
        alert(err.error)
        this.router.navigate(['/']);
      }
     )
  }

}
