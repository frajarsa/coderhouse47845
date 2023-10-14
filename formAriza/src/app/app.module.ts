import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAlumnosComponent } from './forms/form-alumnos/form-alumnos.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ConcatPipe } from './pipes/concat.pipe';

@NgModule({
  declarations: [AppComponent, FormAlumnosComponent, ConcatPipe],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
