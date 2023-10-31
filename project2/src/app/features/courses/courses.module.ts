import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CoursesTableModule } from 'src/app/features/courses-table/courses-table.module';
import { CoursesTableComponent } from 'src/app/features/courses-table/courses-table.component';
import { ViewCoursesDialogComponent } from './courses-table/view-courses-dialog/view-courses-dialog.component';


@NgModule({
  declarations: [
    CoursesTableComponent,
    CoursesComponent,
    ViewCoursesDialogComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MaterialModule,
    CoursesTableModule
  ]
})
export class CoursesModule {




}
