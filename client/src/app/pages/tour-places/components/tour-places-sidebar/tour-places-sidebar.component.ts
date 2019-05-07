import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tour-places-sidebar',
  templateUrl: './tour-places-sidebar.component.html',
  styleUrls: ['./tour-places-sidebar.component.css']
})
export class TourPlacesSidebarComponent implements OnInit {

  @Input() package:any
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      date:'',
      guestcount: ''
    })
  }

  checkavailability(){
    var date=this.myForm.controls['date'].value;
    var guestcount=this.myForm.controls['guestcount'].value;
    if(guestcount>this.package.maxguest || guestcount==0 ||!guestcount){
      alert("please enter a valid guest count number")
    }else if(!date ){
      alert("Not Available")
    }
    console.log(this.myForm.controls['date'].value)
  }

}
