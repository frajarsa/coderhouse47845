import { Injectable } from '@angular/core';
import { Curso } from '../interfaces/curso';
import courseData from '../../json/cursos.json';
import { BehaviorSubject, Observable } from 'rxjs';


const cursosData: Curso[] = courseData


@Injectable({
  providedIn: 'root'
})




export class CoursesService {

  cursos: Curso[] = cursosData
  private elimCurso = new BehaviorSubject<Curso[]>([]);
  private cursoSubject$ = new BehaviorSubject<Curso[]>([]);
  private elimCurso$ = new BehaviorSubject<Curso[]>([]);


  constructor( ) { }
  


  eliminar (element: Curso) {
      return this.elimCurso$.next(cursosData.filter((x: Curso) => x.id !== element.id))
  }
  
}
