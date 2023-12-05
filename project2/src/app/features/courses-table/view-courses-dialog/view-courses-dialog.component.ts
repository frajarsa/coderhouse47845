import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Curso } from 'src/app/interfaces/curso';

@Component({
  selector: 'app-view-courses-dialog',
  templateUrl: './view-courses-dialog.component.html',
  styleUrls: ['./view-courses-dialog.component.scss'],
})
export class ViewCoursesDialogComponent {
  constructor(
    private ref: MatDialogRef<ViewCoursesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curso
  ) {}
}
