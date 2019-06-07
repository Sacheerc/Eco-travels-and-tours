import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { GetUserService } from 'src/app/services/userData/get-user.service';
import { SendEmailsService } from 'src/app/services/sendEmails/send-emails.service';

@Component({
  selector: 'app-available-dialog',
  templateUrl: './available-dialog.component.html',
  styleUrls: ['./available-dialog.component.css']
})
export class AvailableDialogComponent implements OnInit {
  tour: any;
  reservation:any;
  clientId=JSON.parse(localStorage.getItem('user'))._id
  client:any
  constructor(@Inject(MAT_DIALOG_DATA)public data: any, private getuser:GetUserService, private sendmail:SendEmailsService) { 
    this.tour = data.data;
    this.reservation=data.reservation;
    console.log(data)
  }

  ngOnInit() {
  }

 

}
