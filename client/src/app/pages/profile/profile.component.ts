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
  profilenavigator:any;
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {
    this.loginService.getloginpage().subscribe(async (result)=>{
      if(result){
        localStorage.setItem('user',JSON.stringify(result))
        this.currentuser=result;
        console.log(result)
      }else{
        localStorage.removeItem('user');
        await this.router.navigate(['/']);
        location.reload()
      }
      },
      (err)=>{
       console.log(err.error)
      }
     )

  //   console.log(this.currentuser)
  }

}
