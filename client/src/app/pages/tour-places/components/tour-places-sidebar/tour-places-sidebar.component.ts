import { Component, OnInit } from '@angular/core';
import {TourPlacesComponent} from '../../tour-places.component'

@Component({
  selector: 'app-tour-places-sidebar',
  templateUrl: './tour-places-sidebar.component.html',
  styleUrls: ['./tour-places-sidebar.component.css']
})
export class TourPlacesSidebarComponent implements OnInit {
  package:any;
  constructor(private tourplaces:TourPlacesComponent) { }

  ngOnInit() {
    this.package=this.tourplaces.getpackage();
  }

}
