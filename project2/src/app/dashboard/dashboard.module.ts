import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LeftbarModule } from 'src/app/menus/leftbar/leftbar.module';
import { TopbarModule } from 'src/app/menus/topbar/topbar.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LeftbarModule,
    TopbarModule,
    MaterialModule
  ]
})
export class DashboardModule { }
