import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormBuilder } from '@angular/forms';
import { ReservationsService } from '../../../../services/reservations/reservations.service';
import { PopupModalsService } from '../../../../services/popup-modals/popup-modals.service';

@Component({
  selector: 'app-tour-places-sidebar',
  templateUrl: './tour-places-sidebar.component.html',
  styleUrls: ['./tour-places-sidebar.component.css']
})
export class TourPlacesSidebarComponent implements OnInit {

  @Input() package:any
  myForm: FormGroup;
  constructor(
    private popupModal: PopupModalsService,
    private fb: FormBuilder,
    private reservationService:ReservationsService
    ) { }

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
    }else{
      var data =JSON.stringify({ 
        date: date,
        duration:this.package.duration,
        packageid:this.package._id
      });
      this.reservationService.findReservations(data).subscribe((result) => {
        var keys = Object.keys(result);
        var len = keys.length;
        if(len==0){
          this.popupModal.tourAvailableModal();
        }
        else{
          this.popupModal.tourUnavailableModal();
        }
      },
        (err) => {
          console.log(err.error)
        }
      );
    }
    // console.log(this.myForm.controls['date'].value)
  }

}
