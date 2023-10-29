import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { TopbarModule } from './menus/topbar/topbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LeftbarModule } from './menus/leftbar/leftbar.module';
import { StudentsTableModule } from './features/students-table/students-table.module';
import { CoursesTableComponent } from './features/courses-table/courses-table.component';
import { CoursesTableModule } from 'src/app/features/courses-table/courses-table.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    TopbarModule,
    LeftbarModule,
    StudentsTableModule,
    CoursesTableModule
  ],
  exports: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
