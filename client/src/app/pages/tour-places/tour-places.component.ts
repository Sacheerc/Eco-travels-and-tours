import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourPackagesService } from '../../services/tours/tour-packages.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AvailableDialogComponent } from './components/available-dialog/available-dialog.component';


@Component({
  selector: 'app-tour-places',
  templateUrl: './tour-places.component.html',
  styleUrls: ['./tour-places.component.css']
})

export class TourPlacesComponent implements OnInit {

  package: any;

  constructor(public dialog: MatDialog,private route: ActivatedRoute, private tourpackageservice: TourPackagesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.tourpackageservice.getpackages().subscribe((result) => {
        this.package = result
        this.package = this.package.find(tourPackage => tourPackage._id == id);
      },
        (err) => {
          console.log(err.error)
        }
      )
    });
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
    id: 1,
    title: 'Angular For Beginners'
    };
   const dialogRef = this.dialog.open(AvailableDialogComponent, dialogConfig);
   dialogRef.afterClosed().subscribe(result => {
    console.log("Dialog was closed")
   console.log(result)
   });
    }
}


