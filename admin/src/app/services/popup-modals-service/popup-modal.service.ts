import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ConfirmationDialogComponent } from '../../components/confirmation-dialog/confirmation-dialog.component'
import { ViewAssignedGuideComponent } from 'src/app/pages/reservations/view-assigned-guide/view-assigned-guide.component';

@Injectable({
  providedIn: 'root'
})
export class PopupModalService {

  constructor(public dialog: MatDialog) { }

  removeAssignedGuideConfimationModal(title,description) {
    const data={
      title:title,
      description:description
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width="500px"
    dialogConfig.data = {
      id: 1,
      data: data
    };
    return this.dialog.open(ConfirmationDialogComponent, dialogConfig);
    
  }

  closeModel(){
    this.dialog.closeAll();
  }

  openAssignedGuideModal(guide,reservation) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width="370px"
    dialogConfig.data = {
      id: 1,
      guide: guide,
      reservation:reservation
    };
    return this.dialog.open(ViewAssignedGuideComponent, dialogConfig);
  }
}
