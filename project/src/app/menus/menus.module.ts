import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    LeftbarComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LeftbarComponent,
    TopbarComponent
  ]
})
export class MenusModule { }
