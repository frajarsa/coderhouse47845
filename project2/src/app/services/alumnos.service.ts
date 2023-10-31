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
  alumnos: Student[] = []
  private studentSubject$ = new BehaviorSubject<Student[]>(alumnosData);

  loadUsers(): void {
    this.studentSubject$.next(alumnosData)
  }

  constructor() { }


  get(): Student[] {
    this.studentSubject$.subscribe((value) => {
      this.alumnos = value
    })
    return this.alumnos
  }

}
