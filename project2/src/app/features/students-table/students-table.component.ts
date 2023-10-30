import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Student } from 'src/app/interfaces/student';
import { EditStudentDialogComponent } from './edit-student-dialog/edit-student-dialog.component';
import { Curso } from 'src/app/interfaces/curso';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Observable } from 'rxjs';




function uniqueID() {
  return Math.floor(0.000000321 * Date.now())
}

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {

  alumnosObservable$: Student[] = [];
  long: number = this.alumnosObservable$.length;
  displayedColumns: string[] = ['id', 'nombre', 'email', 'dni', 'curso', 'actions'];
  dataSource: MatTableDataSource<Student> = new MatTableDataSource(this.alumnosService.alumnos);



  @ViewChild(MatTable) tabla!: MatTable<Student>;

  constructor(
    private dialog: MatDialog,
    private alumnosService: AlumnosService,
  ) {
   
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  eliminar(element: Student) {
    this.dataSource.data = this.dataSource.data.filter((estudiante: Student) => estudiante.id != element.id);
    this.long = this.dataSource.data.length
  }

  editar(elemento: Student) {
    const dialogRef = this.dialog.open(EditStudentDialogComponent, {
      width: "60%",
      enterAnimationDuration: "500ms",
      data: elemento
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        const item = this.dataSource.data.find(estudiante => estudiante.id == resultado.id);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = resultado;
        this.tabla.renderRows();
      }
    })
  }

  agregar() {
    const dialogRef = this.dialog.open(EditStudentDialogComponent, {
      width: "60%",
      enterAnimationDuration: "500ms",

    });

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        resultado.id = uniqueID()
        this.dataSource.data.push(resultado);
        this.long = this.dataSource.data.length
        this.tabla.renderRows();
      }
    })

  }
ver(data: Element) {
  console.log(data)
}

}
