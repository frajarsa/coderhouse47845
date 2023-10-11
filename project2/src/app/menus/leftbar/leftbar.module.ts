import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftbarComponent } from './leftbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material/material.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { StudentsModule } from 'src/app/features/students/students.module';
import { StudentsTableComponent } from 'src/app/features/students-table/students-table.component';
import { StudentsTableModule } from 'src/app/features/students-table/students-table.module';





@NgModule({
  declarations: [LeftbarComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSidenavModule,
    AppRoutingModule,
    StudentsModule,
    StudentsTableModule
  ],
  exports: [
    LeftbarComponent
  ]
})
export class LeftbarModule { }
