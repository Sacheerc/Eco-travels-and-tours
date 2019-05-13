import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RateGuideService } from 'src/app/services/rateGuide/rate-guide.service';
import {environment} from 'src/environments/environment'

@Component({
  selector: 'app-guides-guides',
  templateUrl: './guides-guides.component.html',
  styleUrls: ['./guides-guides.component.css']
})
export class GuidesGuidesComponent implements OnInit {

  guides:any;
  url=environment.appUrl+"/tourguides/"
  constructor(private getguideservice:RateGuideService) { }

  ngOnInit() {
    this.getguideservice.getGuides().subscribe((result)=>{
      this.guides=result
      console.log(this.guides)
      },
      (err)=>{
       console.log(err.error)
      }
     )


  }

  rateSort(){
    this.getguideservice.getRateSortGuides().subscribe((result)=>{
      this.guides=result
      console.log(this.guides)
      },
      (err)=>{
       console.log(err.error)
      }
     )
    
  }

  salarySort(){
    this.getguideservice.getSalarySortGuides().subscribe((result)=>{
      this.guides=result
      console.log(this.guides)
      },
      (err)=>{
       console.log(err.error)
      }
     )
  }

  tourSort(){
    this.getguideservice.getTourSortGuides().subscribe((result)=>{
      this.guides=result
      console.log(this.guides)
      },
      (err)=>{
       console.log(err.error)
      }
     )
  }

  

  
  

}
