import { Component, OnInit } from '@angular/core';
import { TourPackagesService } from 'src/app/services/tours/tour-packages.service';
import { ActivatedRoute } from '@angular/router';
import {environment} from 'src/environments/environment';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
// import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-index-reviews',
  templateUrl: './index-reviews.component.html',
  styleUrls: ['./index-reviews.component.css']
})
export class IndexReviewsComponent implements OnInit {

  packages: any
  url=environment.appUrl;
  constructor(private route: ActivatedRoute, private tourpackageservice: TourPackagesService,public dialog: MatDialog) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      // const id = param.get('id');
      this.tourpackageservice.getpackagereviews().subscribe((result) => {
        this.packages = result
      },
        (err) => {
          console.log(err.error)
        }
      );
    });
  }



}
