import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { PadreHijoModule } from 'src/app/padre-hijo/padre-hijo.module';

@NgModule({
  declarations: [AppComponent, AlumnosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    PadreHijoModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
