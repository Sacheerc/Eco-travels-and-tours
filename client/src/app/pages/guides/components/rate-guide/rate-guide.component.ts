import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-rate-guide',
  templateUrl: './rate-guide.component.html',
  styleUrls: ['./rate-guide.component.css']
})
export class RateGuideComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RateGuideComponent>,
    @Inject(MAT_DIALOG_DATA) public data: "DialogData") {}

  ngOnInit() {
  }

}
