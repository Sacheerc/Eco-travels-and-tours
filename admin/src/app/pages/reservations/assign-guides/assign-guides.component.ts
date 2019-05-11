import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationsService } from '../../../services/reservation-service/reservations.service';
import { GetGuidesService } from '../../../services/get-guides.service';
import {environment} from 'src/environments/environment'
import { MatDialog } from '@angular/material';
import { PopupModalService } from '../../../services/popup-modals-service/popup-modal.service';

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
  filteredguides:any

  constructor(
    private getGuide: GetGuidesService, 
    private route: ActivatedRoute, 
    private reservationService: ReservationsService,
    public dialog: MatDialog,
    private router:Router,
    private popupService: PopupModalService,
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
        this.assignGuides(guide,reservation._id);
      } else {
        console.log(false)
      }
    });
  }

  stringAsDate(dateStr: string) {
    return new Date(dateStr);
  }

  assignGuides(guide,reservationId){
    const data={
      reservationid:reservationId,
      guidename:guide.name,
      guideid:guide._id,
      tourcount:guide.tourcount+1
    };
    this.reservationService.assignGuides(data).subscribe((result) => {
      if(result){
        this.router.navigate(['/reservations'])
      }
    },
      (err) => {
        console.log(err.error)
      }
    )
  }

  

}
