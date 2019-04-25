import { Component, OnInit } from '@angular/core';

// import { TourGuide } from './tourGuide';
// import { getMaxListeners } from 'cluster';



@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css']
})
export class GuidesComponent implements OnInit {

//   public openreg=false;
//   public guides:TourGuide[]=[{
//     Id:1,
//     Name:"Kumara De Silva",
//     Age:45,
//     Address:"Nugegoda",
//     state: "Alocated" ,
//     phone:"0774582156",
//     email:"kds@gmail.com"
//   },
//   { Id:2,
//     Name:"Saman Pthirana",
//     Age:30,
//     Address:"Nugegoda",
//     state: "Not Alocated",
//     phone:"0724589654",
//     email:"saman@gmail.com"
//   }
// ]


  constructor() { }

  ngOnInit() {


  }

  registerGuide(){
    //this.openreg=true;
  }

  


}
