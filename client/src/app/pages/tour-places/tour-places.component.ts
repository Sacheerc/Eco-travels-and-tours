import { Component, OnInit } from '@angular/core';
import { TourPackagesService} from 'src/app/services/tours/tour-packages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tour-places',
  templateUrl: './tour-places.component.html',
  styleUrls: ['./tour-places.component.css']
})
export class TourPlacesComponent implements OnInit {
  package:any
  constructor(private router:Router,private tourpackageservice:TourPackagesService) { }

  ngOnInit() {
    this.tourpackageservice.getpackages().subscribe((result)=>{
      console.log(result[0].description)
      this.package=result
      },
      (err)=>{
        alert(err.error)
      }
     )
  }

}
