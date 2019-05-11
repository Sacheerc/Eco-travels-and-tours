import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../../services/reservation-service/reservations.service'
import { PopupModalService } from '../../services/popup-modals-service/popup-modal.service';
import { GetGuidesService } from 'src/app/services/get-guides.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservations:any;
  guides:any
  constructor(
    private reservationService:ReservationsService,
    private popupService:PopupModalService,
    private getGuide:GetGuidesService,
    ) { }

  ngOnInit() {
    this.getGuide.getGuides().subscribe((result) => {
      this.guides = result;
    },
      (err) => {
        console.log(err.error)
      }
    )

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

  removeAssignedGuide(guide,reservation){
    this.popupService.openAssignedGuideModal(guide,reservation);
  }

  findGuide(guidename){
    return this.guides.find(guide => guide.name==guidename)
  }

}
