import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.css']
})
export class ConfirmationPopupComponent implements OnInit {
  dialogdata: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.dialogdata = data.data;
   }

  ngOnInit() {
  }

}
