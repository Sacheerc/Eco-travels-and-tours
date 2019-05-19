import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AvailableDialogComponent } from '../../pages/tour-places/components/available-dialog/available-dialog.component';
import { UnavailableDialogComponent } from '../../pages/tour-places/components/unavailable-dialog/unavailable-dialog.component';
import { ConfirmationPopupComponent } from 'src/app/shared/components/confirmation-popup/confirmation-popup.component'

@Injectable({
  providedIn: 'root'
})
export class PopupModalsService {

  constructor(public dialog: MatDialog) { }

  confimationModal(title,description,button="Remove") {
    const data={
      title:title,
      description:description,
      button:button
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width="500px"
    dialogConfig.data = {
      id: 1,
      data: data
    };
    return this.dialog.open(ConfirmationPopupComponent, dialogConfig);
    
  }


  tourAvailableModal(tour,date,guestcount) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height='550px'
    dialogConfig.data = {
      id: 1,
      data: tour,
      reservation:{
        date:date,
        guestcount:guestcount
      }
    };
    return this.dialog.open(AvailableDialogComponent, dialogConfig);
  }

  tourUnavailableModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: 'Sorry! The Package Is Already Reserved'
    };
    const dialogRef = this.dialog.open(UnavailableDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog was closed")
      // console.log(result)
    });
  }
}
