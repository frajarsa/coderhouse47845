import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/interfaces/student';


const datos: Student[] = [

  { id: Math.floor(Math.random() * 10000), nombre: "Juan", apellido: "Perez", email: "juan.perez@example.com", dni: 12345678 },
  { id: Math.floor(Math.random() * 10000), nombre: "Maria", apellido: "Lopez", email: "maria.lopez@example.com", dni: 87654321 },
  { id: Math.floor(Math.random() * 10000), nombre: "Carlos", apellido: "Gonzalez", email: "carlos.gonzalez@example.com", dni: 98765432 },
  { id: Math.floor(Math.random() * 10000), nombre: "Ana", apellido: "Rodriguez", email: "ana.rodriguez@example.com", dni: 10987654 },
  { id: Math.floor(Math.random() * 10000), nombre: "Jose", apellido: "Garcia", email: "jose.garcia@example.com", dni: 11109876 },
  { id: Math.floor(Math.random() * 10000), nombre: "Francisco", apellido: "Martinez", email: "francisco.martinez@example.com", dni: 12111098 },
  { id: Math.floor(Math.random() * 10000), nombre: "David", apellido: "Sanchez", email: "david.sanchez@example.com", dni: 13121110 },
  { id: Math.floor(Math.random() * 10000), nombre: "Laura", apellido: "Gomez", email: "laura.gomez@example.com", dni: 14131211 },
  { id: Math.floor(Math.random() * 10000), nombre: "Antonio", apellido: "Hernandez", email: "antonio.hernandez@example.com", dni: 15141312 },
  { id: Math.floor(Math.random() * 10000), nombre: "Marta", apellido: "Dominguez", email: "marta.dominguez@example.com", dni: 16151413 },

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
