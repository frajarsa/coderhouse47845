import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersTableModule } from '../users-table/users-table.module';
import { UsersTableComponent } from '../users-table/users-table.component';


@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UsersTableModule
  ]
})
export class UsersModule { }
