import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../../services/reservation-service/reservations.service'

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservations:any;
  constructor(private reservationService:ReservationsService) { }

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

}
