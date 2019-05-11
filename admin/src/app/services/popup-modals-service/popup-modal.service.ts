import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ConfirmationDialogComponent } from '../../components/confirmation-dialog/confirmation-dialog.component'
import { ViewAssignedGuideComponent } from 'src/app/pages/reservations/view-assigned-guide/view-assigned-guide.component';

@Injectable({
  providedIn: 'root'
})
export class PopupModalService {

  constructor(public dialog: MatDialog) { }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
    };
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog was closed")
      console.log(result)
    });
  }

  closeModel(){
    this.dialog.closeAll();
  }

  openAssignedGuideModal(guide,reservation) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      guide: guide,
      reservation:reservation
    };
    const dialogRef = this.dialog.open(ViewAssignedGuideComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog was closed")
      console.log(result)
    });
  }
}
