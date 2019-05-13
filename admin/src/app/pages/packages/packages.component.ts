import { Component, OnInit } from '@angular/core';
import { devModeEqual } from '@angular/core/src/change_detection/change_detection';
import { PackageServiceService } from 'src/app/services/package-service.service';

declare var demo:any;

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  
  constructor(private packageService:PackageServiceService) { }
  public packages:any;

  ngOnInit() {
    this.packageService.getPackageIncome().subscribe((result)=>{
    demo.initPackages(result);
  });

    this.packageService.getPackageTable().subscribe((result1)=>{
      this.packages=result1;
      console.log(result1);
    });

  }


}
