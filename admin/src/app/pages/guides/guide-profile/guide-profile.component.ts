import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetGuidesService } from 'src/app/services/get-guides.service';
import { TourGuide } from 'src/app/pages/guides/tourGuide'
import { environment } from 'src/environments/environment';
import { RegisterGuideComponent } from '../register-guide/register-guide.component';
import { RegisterguidesService } from 'src/app/services/registerguides.service';

@Component({
  selector: 'app-guide-profile',
  templateUrl: './guide-profile.component.html',
  styleUrls: ['./guide-profile.component.css']
})
export class GuideProfileComponent implements OnInit {
  guide: TourGuide
  url = environment.appUrl + "/tourguides/"
  edit = false

  name: string;
  address: string;
  phonenumber: number;
  dob: string;
  email: string;
  NIC: string;
  salary: number;
  imgurl: string;
  tourcount:number;
  rate:number;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private getGuideService: GetGuidesService,
    private regGuides: RegisterguidesService) { }

  ngOnInit() {
    //  const profileId = this.route.snapshot.params.get('id');
    const profileId = '5cc5891ad3f1ef43846da7a7';
    this.getGuideService.guideProfile(profileId).subscribe((result) => {
      console.log(result)
      this.guide = result;
    });
    this.name = this.guide.name
    this.address = this.guide.Address
    this.phonenumber = this.guide.phonenumber
    this.dob = this.guide.dob
    this.email = this.guide.email
    this.NIC = this.guide.nic
    this.salary = this.guide.salary
    this.imgurl = this.guide.imgurl
    this.tourcount = this.guide.tourcount
    this.rate = this.guide.rate
console.log( "name is : "+this.name)
  }

  updateform() {

    console.log(this.name)
   
    var body = `name=${this.name}&address=${this.address}&phonenumber=${this.phonenumber}&email=${this.email}&dob=${this.dob}&nic=${this.NIC}&salary=${this.salary}&imgurl=${this.imgurl}&tourcount=${this.tourcount}&rate=${this.rate}`;
    console.log(body);
    this.regGuides.registerguide(body).subscribe((result) => {

    },
      (err) => {
        alert(err.error)

      }
    )

  }


}
