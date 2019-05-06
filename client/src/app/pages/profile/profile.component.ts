import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentuser:any;
  profilenavigator:any;
  constructor(private loginService:LoginService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    
    this.loginService.getloginpage().subscribe(async (result)=>{
      if(result){
        await localStorage.setItem('user',JSON.stringify(result))
        this.currentuser=result;
      }else{
        localStorage.removeItem('user');
        this.router.navigate(['/']);
      }
      },
      (err)=>{
       console.log(err.error)
      }
     )

     this.route.paramMap.subscribe(param => {
      this.profilenavigator = param.get('id'); 
      // alert(this.profilenavigator) 
    });
    console.log(this.currentuser)
  }

}
