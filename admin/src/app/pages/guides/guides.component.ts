import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { GetGuidesService } from 'src/app/services/get-guides.service';
import {environment} from 'src/environments/environment'

// const url=environment.appUrl+"/tourguides/guide-1.jpg"

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css']
})
export class GuidesComponent implements OnInit {
  guides:any;
  url=environment.appUrl+"/tourguides/"
  constructor(private getguideservice:GetGuidesService) { }

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
