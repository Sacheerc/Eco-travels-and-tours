import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-qaforum-body',
  templateUrl: './qaforum-body.component.html',
  styleUrls: ['./qaforum-body.component.css']
})
export class QaforumBodyComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
        return;
    }
    this.success = true;
}
}
