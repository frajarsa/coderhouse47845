import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { InscripcionesComponent } from './inscripciones.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    InscripcionesComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class InscripcionesModule { }
