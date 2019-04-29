import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard-service/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashBoardService:DashboardService,private router:Router) { }

  ngOnInit() {
    this.dashBoardService.getdashboard().subscribe((result)=>{
      console.log(result)
      },
      (err)=>{
       console.log(err.error)
      }
     )
  }

}
