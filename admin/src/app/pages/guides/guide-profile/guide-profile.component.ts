import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { GetGuidesService } from "src/app/services/get-guides.service";
import { TourGuide } from "src/app/pages/guides/tourGuide";
import { environment } from "src/environments/environment";
import { RegisterGuideComponent } from "../register-guide/register-guide.component";
import { RegisterguidesService } from "src/app/services/registerguides.service";
import { PopupModalService } from 'src/app/services/popup-modals-service/popup-modal.service';
import { MatDialog } from '@angular/material';

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
    private regGuides: RegisterguidesService,
    private popupService:PopupModalService,
    private dialog:MatDialog 
      
    
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
    if(this.id && this.name && this.email && this.NIC){
    var body = {
      id:this.id,
      name: this.name,
      address: this.address,
      phonenumber: this.phonenumber,
      dob: this.dob,
      email: this.email,
      nic: this.NIC,
      salary: this.salary,
      rate:this.rate,
      tourcount:this.tourcount
       
    };
    console.log(this.id);
    this.regGuides.updateGuide(body).subscribe(
      result => {},
      err => {
        alert(err.error);
      }
    );
    location.reload();
  }
}


  delete(){
    var data={
      id:this.id
    }
    console.log("data"+data);

    var title = 'You want to delete Guide ?';
    var description = 'you are going to delete guide'+this.name+' Are you shur you want to delete ' + this.name;
     const dialogRef = this.popupService.confimationModal(title, description, "Delete")
      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        if (result) {
          this.confirmdeletion(data);
         
        } else {
          console.log(false);
        }
      });
   
  }

  confirmdeletion(data){
    this.getGuideService.deleteguide(data).subscribe(result => {
      console.log('successfully deleted');
      this.dialog.closeAll()
    })
    this.router.navigate(['/guides']);
    //location.reload();
  }

} 

// interface person {
  
// }
