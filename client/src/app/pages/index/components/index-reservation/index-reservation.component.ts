import { Component, OnInit } from '@angular/core';
import { TourPackagesService } from 'src/app/services/tours/tour-packages.service';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-reservation',
  templateUrl: './index-reservation.component.html',
  styleUrls: ['./index-reservation.component.css']
})
export class IndexReservationComponent implements OnInit {
  data= JSON.stringify({key:"Anuradhapura"});
  myForm: FormGroup;
  processedstring:String;
  constructor(
    private tourpackageservice:TourPackagesService,
    private fb: FormBuilder,
    private router:Router
    ) { };

  ngOnInit() {
    // this.findtourpackages();
    this.myForm = this.fb.group({
      where: '',
      price: ''
    })
    this.processedstring=this.myForm.controls['where'].value+" "+this.myForm.controls['price'].value;
  }

  test(){
    // console.log(this.myForm.controls['where'].value)
    alert(this.myForm.controls['where'].value+" "+this.myForm.controls['price'].value)
  }

  findtourpackages(){
    var processedstring=this.myForm.controls['where'].value+" "+this.myForm.controls['price'].value;
    var key=JSON.stringify({key:processedstring});
    this.tourpackageservice.findtourpackage(key).subscribe(async (result)=>{
      console.log(result)
      await this.tourpackageservice.setfilteredpackages(result);
      this.router.navigate(['/tours']);
      },
      (err)=>{
       console.log(err.error)
      }
     );
  }

}
