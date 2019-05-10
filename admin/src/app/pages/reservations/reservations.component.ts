import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../../services/reservation-service/reservations.service'
import { PopupModalService } from '../../services/popup-modals-service/popup-modal.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservations:any;
  constructor(private reservationService:ReservationsService,private popupService:PopupModalService) { }

  ngOnInit() {
    this.reservationService.getAllReservations().subscribe((result)=>{
      if(result){
        this.reservations=result
      }
      },
      (err)=>{
       console.log(err.error)
      }
     )
  }
  stringAsDate(dateStr: string) {
    return new Date(dateStr);
  }

  removeAssignedGuide(){
    this.popupService.openModal();
  }

}
