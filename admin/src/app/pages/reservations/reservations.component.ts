import { Component, OnInit, Input } from '@angular/core';
import { ReservationsService } from '../../services/reservation-service/reservations.service'
import { PopupModalService } from '../../services/popup-modals-service/popup-modal.service';
import { GetGuidesService } from 'src/app/services/get-guides.service';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

 declare var successNotification:any;
 declare var dangerNotification:any;

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservations: any;
  @Input() notificationAllert='none';
  p: number = 1;
  guides: any
  constructor(
    private reservationService: ReservationsService,
    private popupService: PopupModalService,
    private getGuide: GetGuidesService,
    public dialog: MatDialog,
    private route: ActivatedRoute, 
    private router:Router
  ) { }

  ngOnInit() {
      var id=localStorage.getItem('notification')
      if(id=='success'){
        var message="Guide Assigning process is Successfully done by Administrator!"
        this.successNotification('top','center',message);
        localStorage.removeItem('notification')
      }
      if(id=='closed'){
        var message="The tour was successfully marked as completed by Administrator!"
        this.successNotification('top','center',message);
        localStorage.removeItem('notification')
      }
      if(id=='removed'){
        var message="Guide Removal process is Successfully done by Administrator!"
        this.dangerNotification('top','center',message);
        localStorage.removeItem('notification')
      }
      if(id=='canceled'){
        var message="The tour cancelled and Money refunded to the user!"
        this.dangerNotification('top','center',message);
        localStorage.removeItem('notification')
      }

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

  successNotification(bottom,center,message){
    successNotification(bottom,center,message);
  }

  dangerNotification(bottom,center,message){
    dangerNotification(bottom,center,message);
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
    var title = "Do you Want to Remove?"
    var description = "Do you want to remove " + guide.name + " from " + reservation.packagename + " on " + this.stringAsDate(reservation.tourdate) + " ?";

    const dialogRef = this.popupService.confimationModal(title, description)
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.removeAssignedGuides(guide, reservation);
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

  // confirm requested cancelations
  confirmCancelation(guide, reservation) {
    if (guide) {
      this.confirmRemoval(guide, reservation)
    } else {
      var title = "Do you Want to Cancel?"
      var description = "Do you want to Refund " + reservation.packagename + " on " + this.stringAsDate(reservation.tourdate) + " to " + reservation.clientname + "?";

      const dialogRef = this.popupService.confimationModal(title, description, "Confirm")
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.cancelTour("canceled", reservation);
        } else {
          console.log(false)
        }
      });
    }
  }

  completedTour(reservation) {
    var title = "Are You Sure?"
    var description = "Do you want to marked as completed " + reservation.packagename + " on " + this.stringAsDate(reservation.tourdate) + "?";

    const dialogRef = this.popupService.confimationModal(title, description, "Complete")
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cancelTour("closed", reservation);
      } else {
        console.log(false)
      }
    });
  }



  findGuide(guidename) {
    return this.guides.find(guide => guide.name == guidename)
  }

  removeAssignedGuides(guide, reservation) {
    const data = {
      reservationid: reservation._id,
      guidename: "Not Assigned",
      guideid: guide._id,
      tourcount: guide.tourcount - 1
    };
    this.reservationService.assignGuides(data).subscribe((result) => {
      console.log(result)
      this.dialog.closeAll();
      localStorage.setItem('notification','removed')
      location.reload();
    },
      (err) => {
        console.log(err.error)
      }
    )
  }

  cancelTour(status, reservation) {
    const data = {
      reservationid: reservation._id,
      status: status,
    };
    this.reservationService.changeStatus(data).subscribe((result) => {
      console.log(result)
      this.dialog.closeAll();
      localStorage.setItem('notification',status)
      location.reload()
    },
      (err) => {
        console.log(err.error)
      }
    )
  }

}
