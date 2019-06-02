import { Component, OnInit } from '@angular/core';
import { devModeEqual } from '@angular/core/src/change_detection/change_detection';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { GalleryService } from 'src/app/services/gallery.service';
import {environment} from 'src/environments/environment';
import { UpdateimageComponent } from './updateimage/updateimage.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

declare var demo:any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  public name: string;
  public gallery:any;
  url=environment.appUrl+"/gallery/";
  constructor(private route: ActivatedRoute, private rout:Router, public galleryService:GalleryService, public dialog: MatDialog) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.galleryService.getgallery().subscribe((result) => {
        this.gallery = result
        console.log("Resultz"+result)
        
      },
        (err) => {
          console.log(err.error)
        }
      );

    });
  }

  delete(name) {
    this.name=name;
    this.galleryService.deleteimage(this.name).subscribe((result) => {
      alert("deleted success")
      this.rout.navigate(['/gallery']);
    },
      (err) => {
        console.log(err.error)
      }
    )
  }

  updatePage(id){
    console.log("dk_ID "+id);
    this.galleryService.setId(id);
    this.rout.navigate(['/updateimage']);
  }

  
}



