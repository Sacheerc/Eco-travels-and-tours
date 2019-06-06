import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';;
import { TourPackagesService } from 'src/app/services/tours/tour-packages.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  _id: string;
  tourid: string;
  rate=1;
  review:string;
  email: String;
  phonenumber: number;

  constructor(
    public dialogRef: MatDialogRef<ReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: "DialogData",
    private tourService: TourPackagesService,
    private routs: Router, private http: HttpClient) {}

  ngOnInit() {
  }

  rateVal(num) {
    this.rate=num;
    console.log(this.rate);
  }

  onNoClick() {
    var body = {
      tourid: this.tourService.getId(),
      rate: this.rate,
      review:this.review,
      email: this.email,
      phonenumber: this.phonenumber,
    }
    this.tourService.addrate(body).subscribe((result) => {
      if (result) {
        alert("added success")
        this.routs.navigate(['/tour']);
      }
    },
      (err) => {
        console.log(err.error)
      }
    )
  }

}
