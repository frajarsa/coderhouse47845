import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCoursesDialogComponent } from '../courses/courses-table/edit-courses-dialog/edit-courses-dialog.component';
import { CoursesTableComponent } from 'src/app/features/courses-table/courses-table.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditCoursesDialogComponent,
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
