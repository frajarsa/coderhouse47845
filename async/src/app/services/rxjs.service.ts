import { Injectable } from '@angular/core';
import { Teacher } from '../interfaces/teacher';
import teachers from '../../json/teachers.json'
import { Observable } from 'rxjs';


const data = teachers

@Injectable({
  providedIn: 'root'
})
export class RxjsService {


  teachers: Teacher[] = data

  teachersObservable: Observable<Teacher[]>;


  constructor() {
    this.teachersObservable = new Observable<Teacher[]>((suscriptor) => {
      suscriptor.next(this.teachers)
    })
  }

  obtenerPromiseTeachers() {
    return new Promise((resolve, reject) => {
      if (this.teachers.length > 0) {
        resolve(this.teachers)
      } else {
        reject({
          code: 100,
          message: "No hay profesores"
        });
      }
    })
  }

  obtenerObservableProfesores() {
    return this.teachersObservable
  }


}
