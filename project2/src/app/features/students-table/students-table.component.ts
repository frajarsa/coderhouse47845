import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/interfaces/student';


const datos: Student[] = [

  { id: 1234, nombre: "Juan", apellido: "Perez", email: "juan.perez@example.com", dni: 12345678 },
  { id: 5678, nombre: "Maria", apellido: "Lopez", email: "maria.lopez@example.com", dni: 87654321 },
  { id: 9012, nombre: "Carlos", apellido: "Gonzalez", email: "carlos.gonzalez@example.com", dni: 98765432 },
  { id: 2345, nombre: "Ana", apellido: "Rodriguez", email: "ana.rodriguez@example.com", dni: 10987654 },
  { id: 6789, nombre: "Jose", apellido: "Garcia", email: "jose.garcia@example.com", dni: 11109876 },
  { id: 5432, nombre: "Francisco", apellido: "Martinez", email: "francisco.martinez@example.com", dni: 12111098 },
  { id: 7890, nombre: "David", apellido: "Sanchez", email: "david.sanchez@example.com", dni: 13121110 },
  { id: 1432, nombre: "Laura", apellido: "Gomez", email: "laura.gomez@example.com", dni: 14131211 },
  { id: 9876, nombre: "Antonio", apellido: "Hernandez", email: "antonio.hernandez@example.com", dni: 15141312 },
  { id: 4321, nombre: "Marta", apellido: "Daguerre", email: "marta.dominguez@example.com", dni: 16151413 },

];

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent {
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email', 'dni', 'actions'];
  dataSource = new MatTableDataSource(datos);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
