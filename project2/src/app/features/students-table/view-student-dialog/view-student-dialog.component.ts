import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from 'src/app/interfaces/student';

@Component({
  selector: 'app-view-student-dialog',
  templateUrl: './view-student-dialog.component.html',
  styleUrls: ['./view-student-dialog.component.scss']
})
export class ViewStudentDialogComponent {


  constructor
    (
      private ref: MatDialogRef<ViewStudentDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Student,
    ) {

  }

}
