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
import { CoursesTableModule } from 'src/app/features/courses-table/courses-table.module';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { DashboardModule } from 'src/app/dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    TopbarModule,
    LeftbarModule,
    StudentsTableModule,
    CoursesTableModule,
    HttpClientModule,
    DashboardModule
  ],
  exports: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
