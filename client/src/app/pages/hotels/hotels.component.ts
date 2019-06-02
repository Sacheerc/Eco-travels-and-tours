import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {}

  ngAfterViewInit(){
    require('src/assets/js/jquery.min.js');
    require('src/assets/js/jquery.easing.1.3.js');
    require('src/assets/js/bootstrap.min.js');
    require('src/assets/js/jquery.waypoints.min.js');
    require('src/assets/js/jquery.flexslider-min.js');
    require('src/assets/js/owl.carousel.min.js');
    require('src/assets/js/jquery.magnific-popup.min.js');
    require('src/assets/js/bootstrap-datepicker.js');
    require('src/assets/js/jquery.stellar.min.js');
    require('src/assets/js/bootstrap-datepicker.js');
  }

}
