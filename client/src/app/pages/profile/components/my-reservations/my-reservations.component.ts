import { Component, OnInit } from '@angular/core';
import { ReservationsService } from 'src/app/services/reservations/reservations.service'
import { PopupModalsService } from 'src/app/services/popup-modals/popup-modals.service'
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material';
import { SendEmailsService } from 'src/app/services/sendEmails/send-emails.service';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css']
})
export class MyReservationsComponent implements OnInit {
  url = environment.appUrl;
  recenttours = [];
  activetours = [];
  p: number = 1;
  q: number = 1;
  guides: any;
  myreservations: any
  clientid = JSON.parse(localStorage.getItem('user'))._id

  constructor(public dialog: MatDialog, private reservationService: ReservationsService, private popupService: PopupModalsService, private sendmail: SendEmailsService) { }

  ngOnInit() {
    this.reservationService.getMyReservations(this.clientid).subscribe((result) => {
      this.myreservations = result
      this.reservationService.getguides().subscribe((guides) => {
        this.guides = guides;
        for (var i in this.myreservations) {
          var reservation = this.myreservations[i]
          var guide = this.guides.find(guide => guide.name == reservation.guidename)
          var data = {
            reservation: reservation,
            guide: guide,
          }
          if (reservation.status == "active" || reservation.status == "requested") {
            this.activetours.push(data);
            console.log("yes")
          } else {
            this.recenttours.push(data);
            // console.log("No")
          }
        }
        console.log(this.activetours.length)
        // console.log(this.recenttours)
      },
        (err) => {
          console.log(err.error)
        }
      );
    },
      (err) => {
        console.log(err.error)
      }
    );

  }

  stringAsDate(dateStr: string) {
    return new Date(dateStr);
  }

  requestRefund(reservation) {
    var title = "Are You Sure?"
    var description = "Do you want to send a cancellation request to " + reservation.packagename + " on " + this.stringAsDate(reservation.tourdate) + "?";

    const dialogRef = this.popupService.confimationModal(title, description, "Request")
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.sendRefundRequest(reservation);
        this.dialog.closeAll();
        location.reload();
      } else {
        console.log(false)
      }
    });
  }

  sendRefundRequest(reservation) {
    const maildata = {
      packagename: reservation.packagename,
      tourdate: reservation.tourdate,
      price: reservation.price,
      clientname: reservation.clientname
    }

    this.sendmail.sendRefundEmail(maildata).subscribe(result => {
      console.log('successfully send');
    })

    const data = {
      reservationid: reservation._id,
      status: "requested"
    }
    this.reservationService.changeStatus(data).subscribe((result) => {
      console.log(result)
    }, (err) => {
      console.log(err)
    });
  }

}
