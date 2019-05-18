import { Component, OnInit } from '@angular/core';
import { GetGuidesService } from 'src/app/services/get-guides.service';

@Component({
  selector: 'app-broadcast-emails',
  templateUrl: './broadcast-emails.component.html',
  styleUrls: ['./broadcast-emails.component.css']
})
export class BroadcastEmailsComponent implements OnInit {
emails:[]
guides:any

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
