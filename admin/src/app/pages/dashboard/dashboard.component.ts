import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard-service/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentuser: any
  constructor(private dashBoardService: DashboardService) { }

  ngOnInit() {
    // get user informations from browser storage
    this.currentuser=JSON.parse(localStorage.getItem('user'));
  }
  ngAfterViewInit() {
    // Start chart.js charts
    var file = require('src/assets/demo/demo.js')
    $(document).ready(function () {
      // Javascript method's body can be found in assets/js/demos.js
      file.demo.initDashboardPageCharts();
    });
  }

}
