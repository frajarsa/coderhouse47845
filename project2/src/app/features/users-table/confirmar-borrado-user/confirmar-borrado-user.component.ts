import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-confirmar-borrado-user',
  templateUrl: './confirmar-borrado-user.component.html',
  styleUrls: ['./confirmar-borrado-user.component.scss']
})
export class ConfirmarBorradoUserComponent {

  usuarios!: User[]

  constructor(private usersService: UsersService,
    private ref: MatDialogRef<ConfirmarBorradoUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ) { }

  ngOnInit() {
    this.usersService.get().subscribe((res) => { this.usuarios = res })
  }

  closeDialogBorrar() {
    this.ref.close(this.data.id);
  }


}
