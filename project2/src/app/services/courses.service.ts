import { Injectable } from '@angular/core';
import { Curso } from '../interfaces/curso';
import courseData from '../../json/cursos.json';


const cursosData: Curso[] = courseData


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }
}
