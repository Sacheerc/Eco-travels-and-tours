import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-main-nav',
  templateUrl: './index-main-nav.component.html',
  styleUrls: ['./index-main-nav.component.css']
})
export class IndexMainNavComponent implements OnInit {
  @Input() isLoggedIn='false';
  currentuser:any;

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {
    this.currentuser=JSON.parse(localStorage.getItem('user'))
  }

  public logout(){
    this.loginService.logout().subscribe(async (result)=>{
        localStorage.removeItem('user');
        await this.router.navigate(['/'])
        location.reload();
      },
      (err)=>{
       console.log(err.error)
      }
     )
  }

}
