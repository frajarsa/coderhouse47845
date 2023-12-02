import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Student } from 'src/app/interfaces/student';
import { EditStudentDialogComponent } from './edit-student-dialog/edit-student-dialog.component';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { ViewStudentDialogComponent } from './view-student-dialog/view-student-dialog.component';
import { ConfirmarBorradoStudentComponent } from 'src/app/features/students-table/confirmar-borrado-student/confirmar-borrado-student.component';
import { NewStudentDialogComponent } from 'src/app/features/students-table/new-student-dialog/new-student-dialog.component';

function uniqueID() {
  return Math.floor(0.000000321 * Date.now());
}

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss'],
})
export class StudentsTableComponent implements OnInit {
  listaDeAlumnos: Student[] = [];
  long: number = 0;
  displayedColumns: string[] = [
    'id',
    'nombre',
    'email',
    'dni',
    'curso',
    'actions',
  ];
  dataSource!: MatTableDataSource<Student>;
  @ViewChild(MatTable) tabla!: MatTable<Student>;

  constructor(
    private dialog: MatDialog,
    private alumnosService: AlumnosService,
  ) {}

  ngOnInit(): void {
    this.alumnosService.get().subscribe(
      (res) => {
      this.listaDeAlumnos = res;
      this.dataSource = new MatTableDataSource(this.listaDeAlumnos);
      this.long = this.listaDeAlumnos.length;
    });
  }


  editar(elemento: Student) {
    const dialogRef = this.dialog.open(EditStudentDialogComponent, {
      width: '60%',
      enterAnimationDuration: '500ms',
      data: elemento,
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if (resultado) {
        this.alumnosService.put(resultado).subscribe((res) => {
          const indexToUpdate = res? this.listaDeAlumnos.findIndex((x) => x.id == res.id) : -1;
          if (indexToUpdate > -1) {
            this.listaDeAlumnos[indexToUpdate] = res;
            this.dataSource.data = this.listaDeAlumnos;
          }
        });
      }
    });
  }

  eliminar(elemento: Student) {
    const dialogRef = this.dialog.open(ConfirmarBorradoStudentComponent, {
      width: "40%",
      enterAnimationDuration: "100ms",
      data: elemento
    });

    dialogRef.afterClosed().subscribe(res => {
      this.alumnosService.delete(res).subscribe(() => {
        console.log(`Hemos borrado el alumno con el id: ${res}`)
        this.alumnosService.get().subscribe((res) => this.dataSource.data = res);
        this.tabla.renderRows()
      })
    })
  }
  agregar() {
    const dialogRef = this.dialog.open(NewStudentDialogComponent, {
      width: "60%",
      enterAnimationDuration: "500ms",

    });

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        this.alumnosService.post(resultado).subscribe((res) => {
          this.listaDeAlumnos.push(res)
          this.dataSource.data = this.listaDeAlumnos;
        })
      }
    })
  }
  ver(datos: Element) {
    const dialogRef = this.dialog.open(ViewStudentDialogComponent, {
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
