import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { ReservationsService } from '../../../../services/reservations/reservations.service';
import { PopupModalsService } from '../../../../services/popup-modals/popup-modals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tour-places-sidebar',
  templateUrl: './tour-places-sidebar.component.html',
  styleUrls: ['./tour-places-sidebar.component.css']
})
export class TourPlacesSidebarComponent implements OnInit {

  @Input() package: any
  myForm: FormGroup;
  constructor(
    private popupModal: PopupModalsService,
    private fb: FormBuilder,
    private reservationService: ReservationsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      date: '',
      guestcount: ''
    })
  }

  checkavailability() {
    var date = this.myForm.controls['date'].value;
    var guestcount = this.myForm.controls['guestcount'].value;

    if (guestcount > this.package.maxguest || guestcount == 0 || !guestcount) {
      alert("please enter a valid guest count number")
    } else if (!date) {
      alert("Not Available")
    } else {
      var data = JSON.stringify({
        date: date,
        duration: this.package.duration,
        packageid: this.package._id
      });
      this.reservationService.findReservations(data).subscribe((result) => {
        var keys = Object.keys(result);
        var len = keys.length;
        if (len == 0) {
          const dialogRef = this.popupModal.tourAvailableModal(this.package, date, guestcount);
          // Execute the reservation data inserting process (Payment gateway should be here)
          dialogRef.afterClosed().subscribe(result => {
            if (localStorage.getItem('user')) {
              var user = JSON.parse(localStorage.getItem('user'))
              const data = {
                clientid: user._id,
                clientname: user.username,
                packageid: this.package._id,
                price: this.package.price,
                packagename: this.package.package,
                tourdate: date,
                contact: "071 924 7080",
                guestcount: guestcount,
                duration: this.package.duration,
                imgurl: this.package.coverimage,
                email: "madushansachintha@gmail.com"
              }
              this.reservationService.makeReservation(data).subscribe(async (result) => {
                await this.router.navigate(['/profile']);
                // location.reload();
              }, (err) => {
                console.log(err)
              })
            } else {
              window.location.href = "http://localhost:3000/auth/google";
            }
          });
        }
        else {
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
