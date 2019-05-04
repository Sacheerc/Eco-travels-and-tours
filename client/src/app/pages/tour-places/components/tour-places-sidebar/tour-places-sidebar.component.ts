import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tour-places-sidebar',
  templateUrl: './tour-places-sidebar.component.html',
  styleUrls: ['./tour-places-sidebar.component.css']
})
export class TourPlacesSidebarComponent implements OnInit {

  @Input() package:any

  constructor() { }

  ngOnInit() {
  }

}
