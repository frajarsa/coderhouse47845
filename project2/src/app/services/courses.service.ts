import { Injectable } from '@angular/core';
import { Curso } from '../interfaces/curso';
import courseData from '../../json/cursos.json';
import { BehaviorSubject, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';


const cursosData: Curso[] = courseData


@Injectable({
  providedIn: 'root'
})




export class CoursesService {
  url: string = "http://localhost:3000/cursos"

  cursos: Curso[] = []
  private cursoSubject$ = new BehaviorSubject<Curso[]>(cursosData);


  constructor(private http: HttpClient) { }


  get(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.url);
  }

  getCourse(id: string): Observable<Curso> {
    return this.http.get<Curso>(`${this.url}/${id}`);
  }

  post(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.url, curso)
  }

  put(curso: Curso): Observable<Curso> {
    console.log(curso)
    return this.http.put<Curso>(`${this.url}/${curso.id}`, curso)
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);

  }




}
