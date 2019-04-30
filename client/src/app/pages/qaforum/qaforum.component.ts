import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qaforum',
  templateUrl: './qaforum.component.html',
  styleUrls: ['./qaforum.component.css']
})
export class QaforumComponent implements OnInit {
  public isOn:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  toggleOn(){
    this.isOn= !this.isOn;
  }
}
