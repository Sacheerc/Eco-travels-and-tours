import { Component, OnInit, ViewChild } from '@angular/core';
import { devModeEqual } from '@angular/core/src/change_detection/change_detection';
import { PackageServiceService } from 'src/app/services/package-service.service';
import {MatPaginator, MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import {MatFormFieldModule} from '@angular/material/form-field';

declare var demo:any;

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private packageService:PackageServiceService) { }
  public packages:Package[];
  displayedColumns: string[] = ['package', 'guestcount', 'income'];
  // dataSource = new MatTableDataSource<Package>(this.packages);
  dataSource 

  ngOnInit() {
    this.packageService.getPackageIncome().subscribe((result)=>{
    demo.initPackages(result);
  });

    this.packageService.getPackageTable().subscribe((result1)=>{
      this.packages=result1;
      this.dataSource=result1;
      console.log(result1);
    });
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getTotalCost() {
    return this.packages.map(t => t.total).reduce((acc, value) => acc + value, 0);
  }
  
  
}
export interface Package {
  _id: string;
  guests: number;
  total: number;
}