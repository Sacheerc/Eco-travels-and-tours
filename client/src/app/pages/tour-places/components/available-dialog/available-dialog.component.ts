import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-available-dialog',
  templateUrl: './available-dialog.component.html',
  styleUrls: ['./available-dialog.component.css']
})
export class AvailableDialogComponent implements OnInit {
  tour: any;
  reservation:any;
  constructor(@Inject(MAT_DIALOG_DATA)public data: any) { 
    this.tour = data.data;
    this.reservation=data.reservation;
    console.log(data)
  }

  ngOnInit() {
  }

}
