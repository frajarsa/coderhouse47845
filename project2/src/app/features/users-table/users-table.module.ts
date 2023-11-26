import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';
import { UsersTableComponent } from './users-table.component';
import { ViewUserDialogComponent } from './view-user-dialog/view-user-dialog.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ConfirmarBorradoUserComponent } from './confirmar-borrado-user/confirmar-borrado-user.component';
import { NewUserDialogComponent } from './new-user-dialog/new-user-dialog.component';



@NgModule({
  declarations: [
    EditUserDialogComponent,
    UsersTableComponent,
    ViewUserDialogComponent,
    UsersTableComponent,
    ConfirmarBorradoUserComponent,
    NewUserDialogComponent
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
