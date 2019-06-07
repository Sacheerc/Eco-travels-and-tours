import { Component, OnInit } from '@angular/core';
import { GetGuidesService } from 'src/app/services/get-guides.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SendMailService } from 'src/app/services/send-mail.service';

@Component({
  selector: 'app-broadcast-emails',
  templateUrl: './broadcast-emails.component.html',
  styleUrls: ['./broadcast-emails.component.css']
})
export class BroadcastEmailsComponent implements OnInit {
  emails = ['rmmdsilva95@gmail.com', 'ruwanpura.maneesha@gmail.com']
  guides: any;
  message: string;
  subject: string;
  data = {
    emails: this.emails,
    data: this.message
  }

 
  constructor(private getguideservice: GetGuidesService, private sendmail: SendMailService,
    private routs: Router,
    private rout: ActivatedRoute) { }

  ngOnInit() {
    this.getguideservice.getGuides().subscribe((result) => {
      this.guides = result
      console.log(this.guides)
    },
      (err) => {
        console.log(err.error)
      }
    )
  }

  submitemail() {

    console.log(this.emails)
    var data = {
      receivermails: this.emails,
      message: this.message,
      subject: this.subject
    }
    //  var data=`receivermails=${this.emails}&message=${this.message}&subject=${this.subject}`;
    console.log(data);
    this.sendmail.broadcastmails(data).subscribe((result) => {
      console.log('successfuly send')

    },
      (err) => {
        alert(err.error)
        this.routs.navigate(['/guides']);

      }
    )
    this.refresh()


  }


  refresh() {
    this.message = ""
    this.subject = ""
    this.emails = []
  }

}
