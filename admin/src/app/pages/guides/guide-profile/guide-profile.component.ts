import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { GetGuidesService } from "src/app/services/getGuides/get-guides.service";
import { TourGuide } from "src/app/pages/guides/tourGuide";
import { environment } from "src/environments/environment";
import { RegisterGuideComponent } from "../register-guide/register-guide.component";
import { RegisterguidesService } from "src/app/services/registerguides.service";

@Component({
  selector: "app-guide-profile",
  templateUrl: "./guide-profile.component.html",
  styleUrls: ["./guide-profile.component.css"]
})
export class GuideProfileComponent implements OnInit {
  guide: any;
  url = environment.appUrl + "/tourguides/";
  edit = false;
  id:any;

  name: string;
  address: string;
  phonenumber: number;
  dob: string;
  email: string;
  NIC: string;
  salary: number;
  imgurl: string;
  tourcount: number;
  rate: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private getGuideService: GetGuidesService,
    private regGuides: RegisterguidesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const profileId = param.get("id");
      this.id = param.get('id');
      
      return new Promise(resolve => {
        this.getGuideService.guideProfile(profileId).subscribe(result => {
          console.log(result);
          this.guide = result;
          resolve();
        });
        
      }).then(() => {
        this.name = this.guide.name;
        this.address = this.guide.address
        this.phonenumber = this.guide.phonenumber
        this.dob = this.guide.dob
        this.email = this.guide.email
        this.NIC = this.guide.nic
        this.salary = this.guide.salary
        this.imgurl = this.guide.imgurl
        this.tourcount = this.guide.tourcount
        this.rate = this.guide.rate
      });
    });
    console.log(this.name)
  }

  updateform() {
    console.log(this.name);
    console.log(this.id);
    //var body = `name=${this.name}&address=${this.address}&phonenumber=${this.phonenumber}&email=${this.email}&dob=${this.dob}&nic=${this.NIC}&salary=${this.salary}&imgurl=${this.imgurl}&tourcount=${this.tourcount}&rate=${this.rate}`;
    var body = {
      id:this.id,
      name: this.name,
      address: this.address,
      phonenumber: this.phonenumber,
      dob: this.dob,
      email: this.email,
      NIC: this.NIC,
      salary: this.salary,
      rate:this.rate,
      tourcount:this.tourcount
    };
    console.log(body);
    this.regGuides.registerguide(body).subscribe(
      result => {},
      err => {
        alert(err.error);
      }
    );
  }
}

interface person {
  
}
