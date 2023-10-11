import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsTableComponent } from './students-table.component';
import { MaterialModule } from 'src/app/material/material.module';






@NgModule({
  declarations: [StudentsTableComponent],
  imports: [
    CommonModule,
    MaterialModule

  ],
  exports: [
    StudentsTableComponent,
  ]
})
export class StudentsTableModule { }
