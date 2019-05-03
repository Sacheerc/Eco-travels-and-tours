import { Component } from '@angular/core';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecoTravels';
  constructor(private loginService:LoginService){}

  ngOnInit(){
    this.loginService.getloginpage().subscribe((result)=>{
      if(result){
        localStorage.setItem('user',JSON.stringify(result))
      }else{
        localStorage.removeItem('user')
      }
      },
      (err)=>{
       console.log(err.error)
      }
     )
  }
}
