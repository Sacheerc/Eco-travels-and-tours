import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AvailableDialogComponent } from '../../pages/tour-places/components/available-dialog/available-dialog.component';
import { UnavailableDialogComponent } from '../../pages/tour-places/components/unavailable-dialog/unavailable-dialog.component';
@Injectable({
  providedIn: 'root'
})
export class PopupModalsService {

  constructor(public dialog: MatDialog) { }

  tourAvailableModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height='500px'
    dialogConfig.data = {
      id: 1,
      title: 'Your Reservation Is Available'
    };
    const dialogRef = this.dialog.open(AvailableDialogComponent, dialogConfig);
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log("Dialog was closed")
    //   console.log(result)
    // });
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
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log("Dialog was closed")
    //   console.log(result)
    // });
  }
}
