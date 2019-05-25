import { Component, OnInit } from '@angular/core';
import {environment} from 'src/environments/environment';


@Component({
  selector: 'app-contact-header',
  templateUrl: './contact-header.component.html',
  styleUrls: ['./contact-header.component.css']
})
export class ContactHeaderComponent implements OnInit {
  url1=environment.appUrl+"/covers/img_bg_cover1.jpg"

  constructor() { }

  ngOnInit() {
    console.log(this.url1);
  }

}
