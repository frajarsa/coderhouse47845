import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCoursesDialogComponent } from './edit-courses-dialog/edit-courses-dialog.component';
import { ViewCoursesDialogComponent } from './view-courses-dialog/view-courses-dialog.component';



@NgModule({
  declarations: [
    EditCoursesDialogComponent,
    ViewCoursesDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class CoursesTableModule { }
