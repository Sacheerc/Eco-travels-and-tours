import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }
  ngAfterViewInit() {
    require("src/assets/js/jquery.min.js");
    require("src/assets/js/jquery.easing.1.3.js");
    require("src/assets/js/bootstrap.min.js");
    require("src/assets/js/jquery.waypoints.min.js");
    require("src/assets/js/jquery.flexslider-min.js");
    require("src/assets/js/owl.carousel.min.js");
    require("src/assets/js/jquery.magnific-popup.min.js");
    require("src/assets/js/magnific-popup-options.js");
    require("src/assets/js/bootstrap-datepicker.js");
    require("src/assets/js/jquery.stellar.min.js");
    require("src/assets/js/main.js");
  }

}
