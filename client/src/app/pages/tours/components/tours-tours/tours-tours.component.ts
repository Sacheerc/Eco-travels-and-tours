import { Component, OnInit } from '@angular/core';
import { TourPackagesService } from 'src/app/services/tours/tour-packages.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tours-tours',
  templateUrl: './tours-tours.component.html',
  styleUrls: ['./tours-tours.component.css']
})
export class ToursToursComponent implements OnInit {
  packages: any
  constructor(private route: ActivatedRoute, private tourpackageservice: TourPackagesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      if (id) {
        var key = JSON.stringify({ key: id });
        this.tourpackageservice.findtourpackage(key).subscribe(async (result) => {
          this.packages = result
        },
          (err) => {
            console.log(err.error)
          }
        );
      } else {
        this.tourpackageservice.getpackages().subscribe((result) => {
          this.packages = result
        },
          (err) => {
            console.log(err.error)
          }
        );
      }
    });
  }
}
