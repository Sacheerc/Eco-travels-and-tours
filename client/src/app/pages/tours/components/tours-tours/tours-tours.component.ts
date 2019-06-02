import { Component, OnInit } from '@angular/core';
import { TourPackagesService } from 'src/app/services/tours/tour-packages.service';
import { ActivatedRoute } from '@angular/router';
import {environment} from 'src/environments/environment';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-tours-tours',
  templateUrl: './tours-tours.component.html',
  styleUrls: ['./tours-tours.component.css']
})
export class ToursToursComponent implements OnInit {
  packages: any
  url=environment.appUrl;
  constructor(private route: ActivatedRoute, private tourpackageservice: TourPackagesService,public dialog: MatDialog) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      if (id) {
        var key = JSON.stringify({ key: id });
        this.tourpackageservice.findtourpackage(key).subscribe(async (result) => {
          this.packages = result
        },
          (err) => {
            console.log(err.error)
          }
        );
      } else {
        this.tourpackageservice.getpackages().subscribe((result) => {
          this.packages = result
        },
          (err) => {
            console.log(err.error)
          }
        );
      }
    });
  }


  openDialog(id): void {

    this.tourpackageservice.setId(id);
    const dialogRef = this.dialog.open(ReviewComponent, {
      width: '400px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
