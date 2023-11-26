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
  long: number = 0
  dataSource! : MatTableDataSource<User>
  usuarios: User[] = []
  displayedColumns: string[] = ["nombre", "apellido", "email", "rol", "actions"]
  @ViewChild(MatTable) tabla!: MatTable<User>;
  
  
  ngOnInit(): void {
    this.usersService.get().subscribe((res) => { 
      this.usuarios = res
      this.dataSource = new MatTableDataSource(this.usuarios)
      this.long = this.usuarios.length

    })
  }
  
  constructor(
    private usersService: UsersService,
    private dialog: MatDialog
  ) {}




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
