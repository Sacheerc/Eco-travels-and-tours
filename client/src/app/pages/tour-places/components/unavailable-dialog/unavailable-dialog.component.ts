import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-unavailable-dialog',
  templateUrl: './unavailable-dialog.component.html',
  styleUrls: ['./unavailable-dialog.component.css']
})
export class UnavailableDialogComponent implements OnInit {
  modalTitle: string;
  constructor(@Inject(MAT_DIALOG_DATA)public data: any) { 
    this.modalTitle = data.title;
    console.log(data)
  }

  ngOnInit() {
  }

}
