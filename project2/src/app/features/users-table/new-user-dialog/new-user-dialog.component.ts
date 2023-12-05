import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-new-user-dialog',
  templateUrl: './new-user-dialog.component.html',
  styleUrls: ['./new-user-dialog.component.scss'],
})
export class NewUserDialogComponent implements OnInit {
  rolNames: string[] = ['admin', 'user'];
  users: User[] = [];
  userForm: FormGroup;

  constructor(
    private usersService: UsersService,
    private fb: FormBuilder,
    private ref: MatDialogRef<NewUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {
    this.userForm = this.fb.group({
      id: new FormControl(data?.id),
      email: new FormControl(data?.email,[Validators.required, Validators.email]),
      pw: new FormControl(data?.pw,[Validators.required,]),
      name: new FormControl(data?.name,[Validators.required,]),
      lastName: new FormControl(data?.lastName,[Validators.required]),
      role: new FormControl(data?.role,[Validators.required,]),
    });
  }

  ngOnInit(): void {
    this.usersService.get().subscribe((res) => {
      this.users = res;
    });
  }
  actualizar() {
    this.ref.close(this.userForm.value);
  }

  closeDialog() {
    this.ref.close(this.userForm.value);
  }
}
