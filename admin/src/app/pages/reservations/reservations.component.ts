import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../../services/reservation-service/reservations.service'
import { PopupModalService } from '../../services/popup-modals-service/popup-modal.service';
import { GetGuidesService } from 'src/app/services/get-guides.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservations: any;
  guides: any
  constructor(
    private reservationService: ReservationsService,
    private popupService: PopupModalService,
    private getGuide: GetGuidesService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getGuide.getGuides().subscribe((result) => {
      this.guides = result;
    },
      (err) => {
        console.log(err.error)
      }
    )

    this.reservationService.getAllReservations().subscribe((result) => {
      if (result) {
        this.reservations = result
      }
    },
      (err) => {
        console.log(err.error)
      }
    )
  }
  stringAsDate(dateStr: string) {
    return new Date(dateStr);
  }

  openAssignedGuide(guide, reservation) {
    const dialogRef = this.popupService.openAssignedGuideModal(guide, reservation);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.confirmRemoval(guide, reservation)
      } else {
        console.log(false)
      }
    });
  }

  confirmRemoval(guide, reservation) {
    var title="Do you Want to Remove?"
    var description="Do you want to remove "+guide.name+" from "+reservation.packagename+" on "+this.stringAsDate(reservation.tourdate)+" ?";
    
    const dialogRef = this.popupService.confimationModal(title,description)
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.removeAssignedGuides(guide, reservation._id);
      } else {
        const dialogRef = this.popupService.openAssignedGuideModal(guide, reservation);
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.confirmRemoval(guide, reservation)
          } else {
            console.log(false)
          }
        });
      }
    });
  }

  findGuide(guidename) {
    return this.guides.find(guide => guide.name == guidename)
  }

  removeAssignedGuides(guide, reservationId) {
    const data = {
      reservationid: reservationId,
      guidename: "Not Assigned",
      guideid: guide._id,
      tourcount: guide.tourcount - 1
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
