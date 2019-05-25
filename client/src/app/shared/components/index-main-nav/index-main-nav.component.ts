import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment'
declare var burgerMenu;
@Component({
  selector: 'app-index-main-nav',
  templateUrl: './index-main-nav.component.html',
  styleUrls: ['./index-main-nav.component.css']
})
export class IndexMainNavComponent implements OnInit {
  isLoggedIn=null;
  url=environment.appUrl;
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {
    this.init()
  }

  init(){
    if(localStorage.getItem('user')){
      this.isLoggedIn='true'
    }else{
      this.isLoggedIn='false'
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
         
        if (document.getElementById('main') !=null) {
          document.getElementById('main').remove();
        }
        const node8 = document.createElement('script');
        node8.type = 'text/javascript';
        node8.src = './assets/js/mainjs.js';
        node8.id = 'mainjs';
        document.getElementsByTagName('body')[0].appendChild(node8);
      }
  });
  }
  public logout(){
    this.loginService.logout().subscribe(async (result)=>{
        localStorage.removeItem('user');
        await this.router.navigate(['/'])
        this.init();
        // location.reload();
      },
      (err)=>{
       console.log(err.error)
      }
     )
  }

}
