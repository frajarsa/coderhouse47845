import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCoursesDialogComponent } from './edit-courses-dialog/edit-courses-dialog.component';
import { ViewCoursesDialogComponent } from './view-courses-dialog/view-courses-dialog.component';
import { ConfirmarBorradoComponent } from './confirmar-borrado/confirmar-borrado.component';
import { NewCourseDialogComponent } from './new-course-dialog/new-course-dialog.component';



@NgModule({
  declarations: [
    EditCoursesDialogComponent,
    ViewCoursesDialogComponent,
    ConfirmarBorradoComponent,
    NewCourseDialogComponent
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
