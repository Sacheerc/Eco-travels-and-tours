import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { environment } from 'src/environments/environment';
import { ReservationsService } from '../../../services/reservation-service/reservations.service'
import { Router } from '@angular/router';
import { PopupModalService } from '../../../services/popup-modals-service/popup-modal.service';

@Component({
  selector: 'app-view-assigned-guide',
  templateUrl: './view-assigned-guide.component.html',
  styleUrls: ['./view-assigned-guide.component.css']
})
export class ViewAssignedGuideComponent implements OnInit {
  guide: any;
  reservation:any
  url=environment.appUrl+"/tourguides/"
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reservationService:ReservationsService,
    private router:Router,
    public dialog: MatDialog
    ) {
    this.guide = data.guide;
    this.reservation=data.reservation;
    console.log(data)
   }

  ngOnInit() {
    
  }

  removeAssignedGuides(guide,reservationId){
    const data={
      reservationid:reservationId,
      guidename:"Not Assigned",
      guideid:guide._id,
      tourcount:guide.tourcount-1
    };
    this.reservationService.assignGuides(data).subscribe((result) => {
      console.log(result)
      this.dialog.closeAll();
      location.reload(); 
    },
      (err) => {
        console.log(err.error)
      }
    )
  }

}
