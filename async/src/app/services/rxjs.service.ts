import { Injectable } from '@angular/core';
import { Teacher } from '../interfaces/teacher';
import teachers from '../../json/teachers.json'
import { Observable, concatMap, delay, from, map, mergeMap, of, toArray } from 'rxjs';


const data = teachers


@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  profesores: Teacher[] = []
  suscrito = ""
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
    this.teachersObservable
      .pipe(
        map(data => data.filter(x => x.age > 30))
      )
      .subscribe({
        next: (v) => {
          this.profesores = v
        },
      })
    return this.profesores
  }

  obtenerProfesoresParaSubscribe() {
    return this.teachersObservable
      .pipe(
        mergeMap((val) => from(val)),
        concatMap(val => of(val).pipe(delay(1000))),
      )
  }

}
