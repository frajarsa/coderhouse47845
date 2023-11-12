import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { EditCoursesDialogComponent } from 'src/app/features/courses-table/edit-courses-dialog/edit-courses-dialog.component';
import { Curso } from 'src/app/interfaces/curso';
import { CoursesService } from 'src/app/services/courses.service';
import { ViewCoursesDialogComponent } from '../courses-table/view-courses-dialog/view-courses-dialog.component';
import { UrlSegment } from '@angular/router';
import { HttpClient } from '@angular/common/http';


function uniqueID() {
  return Math.floor(0.000000321 * Date.now())
}


@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss']
})



export class CoursesTableComponent implements OnInit{
  cursos: Curso[] = []
  displayedColumns: string[] = ['id', 'nombre', 'categoria', 'fechaInicio', 'fechaFinal', 'actions'];
  dataSource!: MatTableDataSource<Curso>;
  @ViewChild(MatTable) tabla!: MatTable<Curso>;
  

  
  long: number = 0
  
  constructor(
    private cursosService: CoursesService,
    private dialog: MatDialog,
    private http :HttpClient) {
      
      
    }

    
    ngOnInit(): void {
      this.cursosService.get().subscribe( 
        res => { 
          this.cursos = res
          this.dataSource = new MatTableDataSource(this.cursos)
          this.long = this.cursos.length

        } )
    }



  editar(elemento: Curso) {
    const dialogRef = this.dialog.open(EditCoursesDialogComponent, {
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

  eliminar(element: Curso) {
    this.dataSource.data = this.dataSource.data.filter((estudiante: Curso) => estudiante.id != element.id);
    this.long = this.dataSource.data.length

  }
  agregar() {
    const dialogRef = this.dialog.open(EditCoursesDialogComponent, {
      width: "60%",
      enterAnimationDuration: "500ms",

    });

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        resultado.id = uniqueID()
        this.cursosService.post(resultado).subscribe( (res) => {
          this.cursos.push(res)
          this.dataSource.data = this.cursos;
          
        } )
      }
    })
  }
  ver(datos: Element) {
    const dialogRef = this.dialog.open(ViewCoursesDialogComponent, {
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
