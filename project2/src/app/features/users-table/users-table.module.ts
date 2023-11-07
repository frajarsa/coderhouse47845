import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';
import { UsersTableComponent } from './users-table.component';
import { ViewUserDialogComponent } from './view-user-dialog/view-user-dialog.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    EditUserDialogComponent,
    UsersTableComponent,
    ViewUserDialogComponent,
    UsersTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    UsersTableComponent
  ]
})
export class UsersTableModule { }
