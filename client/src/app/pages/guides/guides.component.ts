import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RateGuideService } from 'src/app/services/rateGuide/rate-guide.service';
import {environment} from 'src/environments/environment';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RateGuideComponent } from './components/rate-guide/rate-guide.component';

// const url=environment.appUrl+"/tourguides/guide-1.jpg"

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css']
})
export class GuidesComponent implements OnInit {
  guides:any;
  url=environment.appUrl+"/tourguides/"
  constructor(private getguideservice:RateGuideService, public dialog: MatDialog) { }

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


  openDialog(): void {
    const dialogRef = this.dialog.open(RateGuideComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  

  

  
  


}
