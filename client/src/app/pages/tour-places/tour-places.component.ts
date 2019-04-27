import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourPackagesService } from '../../services/tours/tour-packages.service';


@Component({
  selector: 'app-tour-places',
  templateUrl: './tour-places.component.html',
  styleUrls: ['./tour-places.component.css']
})

export class TourPlacesComponent implements OnInit {

  package:any;

  constructor(private route: ActivatedRoute, private tourpackageservice:TourPackagesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      console.log(id);
      this.tourpackageservice.getpackages().subscribe((result)=>{
        this.package=result
        this.package=this.package.find(tourPackage => tourPackage._id == id);
        console.log(this.package)
        },
        (err)=>{
         console.log(err.error)
        }
       ) 
    });
  }
  public getpackage(){
    return this.package
  }
}


