import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss'],
})
export class EditUserDialogComponent {
  usuarios: User[] = [];
  selection: string[] = ['admin', 'user'];
  userForm: FormGroup;

  constructor(
    private usersService: UsersService,
    private fb: FormBuilder,
    private ref: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {
    this.userForm = this.fb.group({
      id: new FormControl(data?.id),
      email: new FormControl(data?.email, [
        Validators.required,
        Validators.email,
      ]),
      pw: new FormControl(data?.pw),
      name: new FormControl(data?.name, Validators.required),
      lastName: new FormControl(data?.lastName, Validators.required),
      role: new FormControl(data?.role, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.usersService.get().subscribe((res) => {
      this.usuarios = res;
    });
  }

  actualizar() {
    this.ref.close(this.userForm.value);
    this.usersService.get().subscribe((res) => {
      this.usuarios = res;
    });
  }

  closeDialog() {
    this.ref.close(this.userForm.value);
  }
}
