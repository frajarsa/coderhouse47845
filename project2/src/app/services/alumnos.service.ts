import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student';
import studentData from '../../json/alumnos.json';
import courseData from '../../json/cursos.json';
import { Curso } from '../interfaces/curso';
import { BehaviorSubject, Subject } from 'rxjs';


const alumnosData: Student[] = studentData
const cursosData: Curso[] = courseData


@Injectable({
  providedIn: 'root'
})

export class AlumnosService {
  private elimStudent = new BehaviorSubject<Student[]>([]);
  private studentSubject$ = new BehaviorSubject<Student[]>([]);
  private elimStudent$ = new BehaviorSubject<Student[]>([]);

  loadUsers(): void {
    this.studentSubject$.next(alumnosData)
  }

  constructor() { }


  get(): Subject<Student[]> {
    console.log(this.studentSubject$)
    return this.studentSubject$
  };

  editar() {


  }
  eliminar(element: Student) {
    return this.elimStudent$.next(alumnosData.filter((x: Student) => x.id !== element.id))
  }

  agregar() {

  }

}
