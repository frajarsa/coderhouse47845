import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftbarComponent } from './leftbar.component';
import { BrowserAnimationsModule } from '../../../../node_modules/@angular/platform-browser/animations';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    LeftbarComponent
  ],
  exports: [
    LeftbarComponent
  ]
})
export class LeftbarModule { }
