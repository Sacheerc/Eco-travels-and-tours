import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-available-dialog',
  templateUrl: './available-dialog.component.html',
  styleUrls: ['./available-dialog.component.css']
})
export class AvailableDialogComponent implements OnInit {
  modalTitle: string;
  constructor(@Inject(MAT_DIALOG_DATA)public data: any) { 
    this.modalTitle = data.title;
    console.log(data)
  }

  ngOnInit() {
  }

}
