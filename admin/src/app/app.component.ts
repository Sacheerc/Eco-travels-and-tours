import { Component,OnInit } from '@angular/core';
import {LoginService} from './services/login/login.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'admin';

  constructor(private loginService:LoginService){}

  ngOnInit(){
    this.loginService.getloginpage().subscribe((result)=>{
      if(!result && localStorage.getItem('user')){
        localStorage.removeItem('user')
      }
      },
      (err)=>{
       console.log(err.error)
      }
     )
  }
}
