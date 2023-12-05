import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ConfirmarBorradoUserComponent } from 'src/app/features/users-table/confirmar-borrado-user/confirmar-borrado-user.component';
import { EditUserDialogComponent } from 'src/app/features/users-table/edit-user-dialog/edit-user-dialog.component';
import { NewUserDialogComponent } from 'src/app/features/users-table/new-user-dialog/new-user-dialog.component';
import { ViewUserDialogComponent } from 'src/app/features/users-table/view-user-dialog/view-user-dialog.component';
import { User } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';





@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  usuarios: User[] = []
  long: number = 0
  displayedColumns: string[] = [
    "nombre",
    "apellido",
    "email",
    "rol",
    "actions",
  ];

  dataSource!: MatTableDataSource<User>
  @ViewChild(MatTable) tabla!: MatTable<User>;

  constructor(
    private dialog: MatDialog,
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.usersService.get().subscribe(
      (res) => {
        this.usuarios = res
        this.dataSource = new MatTableDataSource(this.usuarios)
        this.long = this.usuarios.length
      })
  }


  editar(elemento: User) {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      width: "60%",
      enterAnimationDuration: "500ms",
      data: elemento,
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if (resultado) {
        this.usersService.put(resultado).subscribe((res) => {
          const indexToUpdate = res ? this.usuarios.findIndex((x) => x.id == res.id) : -1;
          if (indexToUpdate > -1) {
            this.usuarios[indexToUpdate] = res;
            this.dataSource.data = this.usuarios
          }
        });
      }
    });
  }

  eliminar(elemento: User) {
    const dialogRef = this.dialog.open(ConfirmarBorradoUserComponent, {
      width: "40%",
      enterAnimationDuration: "100ms",
      data: elemento
    });

    dialogRef.afterClosed().subscribe(res => {
      this.usersService.delete(res).subscribe(() => {
        alert(`Hemos borrado el usuario con el id: ${res}`)
        this.usersService.get().subscribe((res) => this.dataSource.data = res);
        this.tabla.renderRows()
      })
    })
  }
  agregar() {
    const dialogRef = this.dialog.open(NewUserDialogComponent, {
      width: "60%",
      enterAnimationDuration: "500ms",

    });

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        this.usersService.post(resultado).subscribe((res) => {
          this.usuarios.push(res)
          this.dataSource.data = this.usuarios;
        })
      }
    })
  }
  ver(datos: Element) {
    const dialogRef = this.dialog.open(ViewUserDialogComponent, {
      width: "60%",
      enterAnimationDuration: "500ms",
      data: datos
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        const item = this.dataSource.data.find(course => course.id == resultado.id);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = resultado;
        this.tabla.renderRows();
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
