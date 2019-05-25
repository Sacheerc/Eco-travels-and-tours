import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service'
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentuser:any;
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {
    // get user informations from browser storage
    this.currentuser=JSON.parse(localStorage.getItem('user'));
  }

  
  public logout(){
    this.loginService.logout().subscribe((result)=>{
        localStorage.removeItem('admin');
        this.router.navigate(['/login'])
      },
      (err)=>{
       console.log(err.error)
      }
     )
  }

}
