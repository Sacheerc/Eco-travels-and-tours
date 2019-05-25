import { Component, OnInit } from '@angular/core';
import { RateGuideService } from 'src/app/services/rateGuide/rate-guide.service';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-guides-header',
  templateUrl: './guides-header.component.html',
  styleUrls: ['./guides-header.component.css']
})
export class GuidesHeaderComponent implements OnInit {

  url=environment.appUrl+"/covers/img_bg_cover1.jpg"

  constructor() { }

  ngOnInit() {
  }

}

