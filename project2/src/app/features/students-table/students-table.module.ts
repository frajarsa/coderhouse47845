import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsTableComponent } from './students-table.component';
import { MaterialModule } from 'src/app/material/material.module';
import { EditStudentDialogComponent } from './edit-student-dialog/edit-student-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ConcatPipe } from 'src/app/pipes/concat.pipe';
import { MatSelectModule } from '@angular/material/select';
import { ViewStudentDialogComponent } from './view-student-dialog/view-student-dialog.component';






@NgModule({
  declarations: [StudentsTableComponent, EditStudentDialogComponent, ConcatPipe, ViewStudentDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule

  ],
  exports: [
    StudentsTableComponent,
  ]
})
export class StudentsTableModule { }
