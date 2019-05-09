import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard-service/dashboard.service';

// only for avoid undefined key word error.
declare var demo: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  currentuser: any
  constructor(private dashBoardService: DashboardService) { 
  }

  ngOnInit() {
    demo.initDashboardPageCharts()
  }
}
