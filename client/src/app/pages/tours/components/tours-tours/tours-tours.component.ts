import { Component, OnInit } from '@angular/core';
import { TourPackagesService} from 'src/app/services/tours/tour-packages.service';

@Component({
  selector: 'app-tours-tours',
  templateUrl: './tours-tours.component.html',
  styleUrls: ['./tours-tours.component.css']
})
export class ToursToursComponent implements OnInit {
  package:any
  constructor(private tourpackageservice:TourPackagesService) {
    
   }

  ngOnInit() {
    this.tourpackageservice.getpackages().subscribe((result)=>{
      console.log(result[0])
      this.package={
        price:result[0].price,
        coverimage:result[0].coverimage
      }
      },
      (err)=>{
       console.log(err.error)
      }
     )
  }

}
