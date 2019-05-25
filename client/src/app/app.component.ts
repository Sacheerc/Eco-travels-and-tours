import { Component } from '@angular/core';
import { LoginService } from './services/login/login.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecoTravels';
  constructor(private loginService:LoginService,private router:Router){}

ngOnInit(){
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
       
      if (document.getElementById('main') !=null) {
        document.getElementById('main').remove();
      }
      const node8 = document.createElement('script');
      node8.type = 'text/javascript';
      node8.src = './assets/js/mainjs.js';
      node8.id = 'main';
      document.getElementsByTagName('body')[0].appendChild(node8);
    }
});

    this.loginService.getloginpage().subscribe(async (result)=>{
      if(result){
        await localStorage.setItem('user',JSON.stringify(result))
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
