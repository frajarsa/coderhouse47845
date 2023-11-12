import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student';
import studentData from '../../json/alumnos.json';
import courseData from '../../json/cursos.json';
import { Curso } from '../interfaces/curso';
import { BehaviorSubject, Observable, Subject, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const alumnosData: Student[] = studentData
const cursosData: Curso[] = courseData


@Injectable({
  providedIn: 'root'
})

export class AlumnosService {
  url: string = 'http://localhost:3000/alumnos/'
  alumnos: Student[] = []
  private studentSubject$ = new BehaviorSubject<Student[]>(alumnosData);

  loadUsers(): void {
    this.studentSubject$.next(alumnosData)
  }

  constructor(private http: HttpClient) { }

  get(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url)
  }

  post(element: Student): void {
    const newStudent = element
    this.alumnos.push(newStudent)
    this.loadUsers()
  }
}
