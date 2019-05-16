import { Component, OnInit } from '@angular/core';
import { ReservationsService } from 'src/app/services/reservations/reservations.service'
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css']
})
export class MyReservationsComponent implements OnInit {
  url=environment.appUrl;
  recenttours=[];
  activetours=[];
  guides:any;
  myreservations:any
  clientid=JSON.parse(localStorage.getItem('user'))._id

  constructor(private reservationService:ReservationsService) { }
 
  ngOnInit() {
  this.reservationService.getMyReservations(this.clientid).subscribe((result) => {
      this.myreservations=result
      this.reservationService.getguides().subscribe((guides) => {
        this.guides=guides; 
        for(var i in this.myreservations) {
          var reservation=this.myreservations[i]
          var guide = this.guides.find(guide => guide.name==reservation.guidename)
          var data={
            reservation:reservation,
            guide:guide,
          }
          if(reservation.status=="active"){
            this.activetours.push(data);
            console.log("yes")
          }else{
            this.recenttours.push(data);
            // console.log("No")
          }
        }
        console.log(this.activetours)
        console.log(this.recenttours)
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

  daycounter(date){
    var countDownDate = new Date(date).getTime();

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  return days;

  }

}
