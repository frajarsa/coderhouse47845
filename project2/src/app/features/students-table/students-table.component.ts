import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/interfaces/student';
import { EditStudentDialogComponent } from './edit-student-dialog/edit-student-dialog.component';


const datos: Student[] = [

  { id: 1234, nombre: "Juan", apellido: "Perez", email: "juan.perez@example.com", dni: 12345678, curso: "Angular", type: "Estudiante" },
  { id: 5678, nombre: "Maria", apellido: "Lopez", email: "maria.lopez@example.com", dni: 87654321, curso: "React", type: "Estudiante" },
  { id: 9012, nombre: "Carlos", apellido: "Gonzalez", email: "carlos.gonzalez@example.com", dni: 98765432, curso: "View", type: "Estudiante" },
  { id: 2345, nombre: "Ana", apellido: "Rodriguez", email: "ana.rodriguez@example.com", dni: 10987654, curso: "React", type: "Estudiante" },
  { id: 6789, nombre: "Jose", apellido: "Garcia", email: "jose.garcia@example.com", dni: 11109876, curso: "Angular", type: "Estudiante" },
  { id: 5432, nombre: "Francisco", apellido: "Martinez", email: "francisco.martinez@example.com", dni: 12111098, curso: "Angular", type: "Estudiante" },
  { id: 7890, nombre: "David", apellido: "Sanchez", email: "david.sanchez@example.com", dni: 13121110, curso: "Angular", type: "Estudiante" },
  { id: 1432, nombre: "Laura", apellido: "Gomez", email: "laura.gomez@example.com", dni: 14131211, curso: "Angular", type: "Estudiante" },
  { id: 9876, nombre: "Antonio", apellido: "Hernandez", email: "antonio.hernandez@example.com", dni: 15141312, curso: "React", type: "Estudiante" },
  { id: 4321, nombre: "Marta", apellido: "Daguerre", email: "marta.dominguez@example.com", dni: 16151413, curso: "View", type: "Estudiante" },

];

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent {

  constructor(private dialog: MatDialog) { }

  displayedColumns: string[] = ['id', 'nombre', 'email', 'dni', 'curso', 'actions'];
  dataSource = new MatTableDataSource(datos);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openAdd() {
    console.log()
    let _popup = this.dialog.open(EditStudentDialogComponent, {
      width: "60%",
      enterAnimationDuration: "500ms",
      data: {
        title: "Añadir estudiante",

      }
    })

    _popup.afterClosed().subscribe(item => { item })
  }

}
