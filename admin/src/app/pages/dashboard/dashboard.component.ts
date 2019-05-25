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
    this.dashBoardService.getReservations().subscribe((result1)=>{
      this.dashBoardService.getOngoingTours().subscribe((result2)=>{
        this.dashBoardService.getCancellations().subscribe((result3)=>{
          demo.initROCCharts(result1,result2,result3);
        });
      });
    });
    
    this.dashBoardService.getIncome().subscribe((result)=>{
    demo.initIncomeChart(result);;
    });

    this.dashBoardService.getDestIncome().subscribe((result)=>{
      console.log(result)
      demo.initDestIncome(result);
    });
  }



}
