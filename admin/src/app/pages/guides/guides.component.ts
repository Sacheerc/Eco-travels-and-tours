import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { GetGuidesService } from 'src/app/services/get-guides.service';


@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css']
})
export class GuidesComponent implements OnInit {
  guides:any;

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

  

  
  


}
