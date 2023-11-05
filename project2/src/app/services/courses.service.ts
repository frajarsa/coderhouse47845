import { Injectable } from '@angular/core';
import { Curso } from '../interfaces/curso';
import courseData from '../../json/cursos.json';
import { BehaviorSubject } from 'rxjs';


const cursosData: Curso[] = courseData


@Injectable({
  providedIn: 'root'
})




export class CoursesService {

  cursos: Curso[] = []
  private cursoSubject$ = new BehaviorSubject<Curso[]>(cursosData);


  constructor() { }


  get(): Curso[] {
    this.cursoSubject$.subscribe((value) => {
      this.cursos = value
    })
    return this.cursos
  }
}
