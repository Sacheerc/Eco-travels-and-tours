import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentuser:any;
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {
    this.loginService.getloginpage().subscribe((result)=>{
      if(result){
        localStorage.setItem('user',JSON.stringify(result))
      }else{
        localStorage.removeItem('user');
        this.router.navigate(['/']);
      }
      },
      (err)=>{
       console.log(err.error)
      }
     )
    // alert("hello")
  }

}
