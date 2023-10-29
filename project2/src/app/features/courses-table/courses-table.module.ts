import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCoursesDialogComponent } from './edit-courses-dialog/edit-courses-dialog.component';
import { CoursesTableComponent } from 'src/app/features/courses-table/courses-table.component';



@NgModule({
  declarations: [
    EditCoursesDialogComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class CoursesTableModule { }
