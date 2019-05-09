import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-index-reservation',
  templateUrl: './index-reservation.component.html',
  styleUrls: ['./index-reservation.component.css']
})
export class IndexReservationComponent implements OnInit {
  myForm: FormGroup;
  processedstring: String;
  constructor(
    private fb: FormBuilder,
  ) { };

  ngOnInit() {
    this.myForm = this.fb.group({
      where: '',
      price: ''
    })
  }

}
