import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  usuarios: User[] = []

  constructor(
    private usersService: UsersService,
    private dialog: MatDialog
  ) {
    this.usuarios = this.usersService.get()
    console.log(this.usuarios)
  }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ["nombre", "apellido", "email", "rol", "actions"]
  dataSource: MatTableDataSource<User> = new MatTableDataSource(this.usersService.get());
  @ViewChild(MatTable) tabla!: MatTable<User>;

  agregar() {

  }

  ver(el: Element) {

  }
  editar(el: Element) {

  }
  eliminar(el: Element) {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
