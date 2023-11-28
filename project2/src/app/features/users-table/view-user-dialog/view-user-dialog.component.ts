import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/interfaces/users';

@Component({
  selector: 'app-view-user-dialog',
  templateUrl: './view-user-dialog.component.html',
  styleUrls: ['./view-user-dialog.component.scss']
})
export class ViewUserDialogComponent {

  constructor(
    private ref: MatDialogRef<ViewUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ) {

  }

}
