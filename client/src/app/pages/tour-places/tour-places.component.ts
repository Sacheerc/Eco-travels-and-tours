import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourPackagesService } from '../../services/tours/tour-packages.service';
import {environment} from 'src/environments/environment'


@Component({
  selector: 'app-tour-places',
  templateUrl: './tour-places.component.html',
  styleUrls: ['./tour-places.component.css']
})

export class TourPlacesComponent implements OnInit {

  package: any;
  uri=environment.appUrl;
  constructor(private route: ActivatedRoute, private tourpackageservice: TourPackagesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.tourpackageservice.getpackages().subscribe((result) => {
        this.package = result
        this.package = this.package.find(tourPackage => tourPackage._id == id);
      },
        (err) => {
          console.log(err.error)
        }
      )
    });
  }

}


