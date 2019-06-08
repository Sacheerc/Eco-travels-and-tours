import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationsService } from '../../../services/reservation-service/reservations.service';
import { GetGuidesService } from '../../../services/get-guides.service';
import {environment} from 'src/environments/environment'
import { MatDialog } from '@angular/material';
import { PopupModalService } from '../../../services/popup-modals-service/popup-modal.service';
import { SendMailService } from 'src/app/services/send-mail.service';

@Component({
  selector: 'app-assign-guides',
  templateUrl: './assign-guides.component.html',
  styleUrls: ['./assign-guides.component.css']
})
export class AssignGuidesComponent implements OnInit {
  url=environment.appUrl+"/tourguides/"
  reservations: any;
  reservedpackage: any;
  invalidGuides: any;
  guides: any;
  allguides: any;
  filteredguides:any;
  p: number = 1;
  

  constructor(
    private getGuide: GetGuidesService, 
    private route: ActivatedRoute, 
    private reservationService: ReservationsService,
    public dialog: MatDialog,
    private router:Router,
    private popupService: PopupModalService,
    private sendmail:SendMailService
    ) { }

  ngOnInit() {
    this.getGuide.getGuides().subscribe((result) => {
      this.guides = result;
      var allguides = []
      for (var i in result) {
        allguides.push(result[i].name)
      }
      this.allguides = allguides;
    },
      (err) => {
        console.log(err.error)
      }
    )

    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.reservationService.getAllReservations().subscribe((result) => {
        this.reservations = result
        this.reservedpackage = this.reservations.find(reservation => reservation._id == id);
        var data = {
          date: this.reservedpackage.tourdate,
          duration: this.reservedpackage.duration
        }
        this.reservationService.getInvalidGuides(data).subscribe((result) => {
          var guides = []
          for (var i in result) {
            guides.push(result[i].guidename)
          }
          this.invalidGuides = guides
          let difference = this.allguides.filter(x => !this.invalidGuides.includes(x));
          var filteredguides = []
          for (i in difference) {
            filteredguides.push(this.guides.find(guide => guide.name == difference[i]));
          }
          this.filteredguides = filteredguides
        },
          (err) => {
            console.log(err.error)
          }
        )
      },
        (err) => {
          console.log(err.error)
        }
      )
    });
  }

  confirmAssign(guide, reservation) {
    var title="Do you Want to Assign "+guide.name+"?"
    var description="Do you want to assign "+guide.name+" for "+reservation.packagename+" on "+this.stringAsDate(reservation.tourdate)+" ?";
    var button="Assign"
    const dialogRef = this.popupService.confimationModal(title,description,button)
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.assignGuides(guide,reservation);
      } else {
        console.log(false)
      }
    });
  }

  stringAsDate(dateStr: string) {
    return new Date(dateStr);
  }

  assignGuides(guide,reservation){
    const mailData = {
      receivermail: guide.email,
      packagename:reservation.packagename,
      tourdates:this.stringAsDate(reservation.tourdate),
      clientName:reservation.clientname

    }
    this.sendmail.sendAssinedEmail(mailData).subscribe(
      result => {
        console.log("Email successfuly send");
      }
     
    );

    const data={
      reservationid:reservation._id,
      guidename:guide.name,
      guideid:guide._id,
      tourcount:guide.tourcount+1,
  
    };
    this.reservationService.assignGuides(data).subscribe((result) => {
      if(result){
        localStorage.setItem('notification','success')
        this.router.navigate(['/reservations'])
      }
    },
      (err) => {
        console.log(err.error)
      }
    )



  }

  

}
