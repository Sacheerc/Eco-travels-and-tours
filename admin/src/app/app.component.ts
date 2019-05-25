import { Component,OnInit } from '@angular/core';
import {LoginService} from './services/login.service'

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
      if(!result && localStorage.getItem('admin')){
        localStorage.removeItem('admin')
      }
      },
      (err)=>{
       console.log(err.error)
      }
     )
  }
}
