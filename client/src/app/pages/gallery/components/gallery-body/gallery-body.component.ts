import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery/gallery.service';
import { ActivatedRoute } from '@angular/router';
import {environment} from 'src/environments/environment'

@Component({
  selector: 'app-gallery-body',
  templateUrl: './gallery-body.component.html',
  styleUrls: ['./gallery-body.component.css']
})

export class GalleryBodyComponent implements OnInit {
  packages: any
  url=environment.appUrl+"/gallery/";
  constructor(private route: ActivatedRoute, private galleryservice: GalleryService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      if (id) {
        var key = JSON.stringify({ key: id });
        this.galleryservice.findtourpackage(key).subscribe(async (result) => {
          this.packages = result
        },
          (err) => {
            console.log(err.error)
          }
        );
      } else {
        this.galleryservice.getgallery().subscribe((result) => {
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
