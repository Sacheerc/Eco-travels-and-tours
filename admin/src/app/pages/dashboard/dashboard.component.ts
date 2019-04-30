import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard-service/dashboard.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentuser:any
  constructor(private dashBoardService:DashboardService,private router:Router) { }

  ngOnInit() {
    this.dashBoardService.getdashboard().subscribe((result)=>{
      this.currentuser=result;
    },
      (err)=>{
       console.log(err.error)
    }
     )
  }
  ngAfterViewInit() {
    // Start chart.js charts
    var file=require('src/assets/demo/demo.js')
    $(document).ready(function() {
      // Javascript method's body can be found in assets/js/demos.js
      file.demo.initDashboardPageCharts();
    });
    }

}
