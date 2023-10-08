import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    TopbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TopbarComponent,
  ]
})
export class TopbarModule { }
