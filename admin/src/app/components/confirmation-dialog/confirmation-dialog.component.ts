import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {
  dialogdata: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.dialogdata = data.data;
   }

  ngOnInit() {
  }

}
