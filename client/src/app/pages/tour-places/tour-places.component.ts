import { Component, OnInit, } from '@angular/core';
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
  // ngAfterViewInit() {
  //   require("src/assets/js/jquery.min.js");
  //   require("src/assets/js/jquery.easing.1.3.js");
  //   require("src/assets/js/bootstrap.min.js");
  //   require("src/assets/js/jquery.waypoints.min.js");
  //   require("src/assets/js/jquery.flexslider-min.js");
  //   require("src/assets/js/owl.carousel.min.js");
  //   require("src/assets/js/jquery.magnific-popup.min.js");
  //   require("src/assets/js/magnific-popup-options.js");
  //   require("src/assets/js/bootstrap-datepicker.js");
  //   require("src/assets/js/jquery.stellar.min.js");
  //   require("src/assets/js/main.js");
  // }

  public getpackage(){
    return this.package
  }
}


