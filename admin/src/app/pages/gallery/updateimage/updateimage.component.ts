import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-updateimage',
  templateUrl: './updateimage.component.html',
  styleUrls: ['./updateimage.component.css']
})
export class UpdateimageComponent implements OnInit {

  _id:string;
  name1: string;
  description: string;
  imgurl:string;
  imagename: String;
  galleryimage: string;
  image: File;

  constructor(private galleryService: GalleryService, private routs: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  createFormData(event) {
    this.image = event.target.files[0];
    this.imagename = event.target.files[0].name
  }


  submitForm() {
    var body = {
      _id: this.galleryService.getId(),
      name: this.name1,
      description: this.description,
      galleryimage: this.name1+".jpg"
    }
    this.galleryService.updateimage(body).subscribe((result) => {
      if (result) {
        this.galleryService.uploadimage(this.image,this.name1+".jpg").subscribe((result) => {
          alert("added success")
          this.routs.navigate(['/gallery']);
        },
          (err) => {
            console.log(err.error)
          }
        )
      }
    },
      (err) => {
        console.log(err.error)
      }
    )
  }

}
