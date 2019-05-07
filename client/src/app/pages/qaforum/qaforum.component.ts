import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-qaforum',
  templateUrl: './qaforum.component.html',
  styleUrls: ['./qaforum.component.css']
})
export class QaforumComponent implements OnInit {
  public isOn:boolean=false;
  @Input() isLoggedIn='false';
  currentuser:any;

  constructor() { }

  ngOnInit() {
    this.currentuser=JSON.parse(localStorage.getItem('user'))
  }

  toggleOn(){
    this.isOn= !this.isOn;
  }
}
