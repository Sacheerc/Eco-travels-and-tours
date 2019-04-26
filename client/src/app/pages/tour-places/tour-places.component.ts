import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tour-places',
  templateUrl: './tour-places.component.html',
  styleUrls: ['./tour-places.component.css']
})
export class TourPlacesComponent implements OnInit {
  title:any
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.title = param.get('id');
      console.log(this.title)
    });
  }

}
