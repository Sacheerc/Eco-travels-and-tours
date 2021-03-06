import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit {
  @Input() active:string
  public LOGO = require("../../../assets/img/logo/logo.png");
  constructor() { }

  ngOnInit() {
  }

}
