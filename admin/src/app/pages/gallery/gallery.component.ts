import { Component, OnInit } from '@angular/core';
import { devModeEqual } from '@angular/core/src/change_detection/change_detection';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from 'src/app/services/gallery.service';
import {environment} from 'src/environments/environment';


declare var demo:any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  
  public packages:any;
  url=environment.appUrl+"/gallery/cat.jpg";
  constructor(private route: ActivatedRoute, private galleryService:GalleryService) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.galleryService.getgallery().subscribe((result) => {
        this.packages = result
        console.log("Resultz"+result)
        
      },
        (err) => {
          console.log(err.error)
        }
      );

    });
  }

}



