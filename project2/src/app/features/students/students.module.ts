import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { RouterModule } from '@angular/router';
import { StudentsTableModule } from '../students-table/students-table.module';
import { DelayhideDirective } from 'src/app/directives/delayhide.directive';


@NgModule({
  declarations: [
    StudentsComponent,
    DelayhideDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    StudentsTableModule,

  ],
  exports: [
    StudentsComponent,
  ]
})
export class StudentsModule { }
