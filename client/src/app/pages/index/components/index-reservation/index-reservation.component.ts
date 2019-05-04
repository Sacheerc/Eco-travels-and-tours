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
  data = JSON.stringify({ key: "Anuradhapura" });
  myForm: FormGroup;
  processedstring: String;
  constructor(
    private tourpackageservice: TourPackagesService,
    private fb: FormBuilder,
    private router: Router
  ) { };

  ngOnInit() {
    this.myForm = this.fb.group({
      where: '',
      price: ''
    })
  }

}
