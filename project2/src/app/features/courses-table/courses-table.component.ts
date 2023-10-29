import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/interfaces/curso';
import courseData from '../../../json/cursos.json';


const ELEMENT_DATA: Curso[] = courseData



@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss']
})



export class CoursesTableComponent {

  long: number = 0

  displayedColumns: string[] = ['id', 'nombre', 'categoria', 'fechaInicio', 'fechaFinal', 'actions'];


  dataSource: MatTableDataSource<Curso> = new MatTableDataSource(ELEMENT_DATA);



  agregar() {
      
  }

  editar() {

  }

  eliminar() {

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
