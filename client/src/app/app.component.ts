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
          if (document.getElementById('custom_js') !=null) {
              document.getElementById('custom_js').remove();
          }
          const node = document.createElement('script');
          node.src = './assets/js/main.js';
          node.type = 'text/javascript';
          node.async = false;
          node.id = 'custom_js';
          node.charset = 'utf-8';
          document.getElementsByTagName('body')[0].appendChild(node);
      }
  });
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
