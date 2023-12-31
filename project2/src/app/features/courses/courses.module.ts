import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CoursesTableComponent } from 'src/app/features/courses-table/courses-table.component';


@NgModule({
  declarations: [
    CoursesTableComponent,
    CoursesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoursesRoutingModule,

  ]
})
export class CoursesModule {




}
