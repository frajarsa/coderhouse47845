import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student';
import studentData from '../../json/alumnos.json';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const alumnosData: Student[] = studentData

@Injectable({
  providedIn: 'root'
})

export class AlumnosService {
  url: string = 'http://localhost:3000/alumnos'

  alumnos: Student[] = []


  constructor(private http: HttpClient) { }


  get(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url)
  }

  getCourse(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.url}/${id}`);
  }

  post(student: Student): Observable<Student> {
    return this.http.post<Student>(this.url, student)
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);

  }

  put(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.url}/${student.id}`, student)
  }


}
