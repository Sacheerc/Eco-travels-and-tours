import { Component, OnInit } from '@angular/core';
import { TourPackagesService} from 'src/app/services/tours/tour-packages.service';

@Component({
  selector: 'app-tours-tours',
  templateUrl: './tours-tours.component.html',
  styleUrls: ['./tours-tours.component.css']
})
export class ToursToursComponent implements OnInit {
  packages:any
  constructor(private tourpackageservice:TourPackagesService) {
    
   }

  ngOnInit() {
    this.tourpackageservice.getpackages().subscribe((result)=>{
      this.packages=result
      console.log(this.packages)
      },
      (err)=>{
       console.log(err.error)
      }
     )
  }

}
