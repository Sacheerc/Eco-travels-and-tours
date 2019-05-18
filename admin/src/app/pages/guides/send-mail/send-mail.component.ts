import { Component, OnInit } from '@angular/core';
import { SendMailService } from 'src/app/services/send-mail.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GetGuidesService } from 'src/app/services/get-guides.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {
receivermail:string;
message:string;
guide:any;
subject:string;
url = environment.appUrl + "/tourguides/"

  constructor(private sendmail:SendMailService, 
    private routs:Router, 
    private rout:ActivatedRoute,
    private getGuideService:GetGuidesService) { }

  ngOnInit() {
    // const id = this.rout.snapshot.paramMap.get('id');
    const id = '5cc5891ad3f1ef43846da7a7'
    this.getGuideService.guideProfile(id).subscribe((result) => {
      console.log(result)
      this.guide = result;
      
    });
  }

  submitemail(){
    this.receivermail=this.guide.email
    console.log(this.receivermail)
    var data=`receivermail=${this.receivermail}&message=${this.message}&subject=${this.subject}`;
    console.log(data);
    this.sendmail.sendMail(data).subscribe((result) =>{
      console.log('successfuly send')
      
    },
    (err) =>{
      alert(err.error)
      this.routs.navigate(['/guides']);
      
    }
    )
    this.refresh()


  }

  refresh(){
    this.message=""
    this.subject=""
  }

}
