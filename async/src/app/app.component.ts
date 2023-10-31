import { Component, OnChanges, OnDestroy } from '@angular/core';
import { Teacher } from './interfaces/teacher';
import { RxjsService } from './services/rxjs.service';
import { Observable, Subscription, concat, concatMap, delay, filter, interval, map, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  title = 'async'
  suscrito: string = ""
  profesoresPromesa: Teacher[] = []
  observableConAsync = new Observable()
  profesores: Teacher[] = [];
  intervalObservable = interval(2000);

  /* Promesa implementada en el constructor trae los datos a la vista al iniciar componente */
  constructor(private rxjsService: RxjsService) {
    this.rxjsService.obtenerPromiseTeachers()
      .then((teachers: any) => {
        this.profesoresPromesa = teachers;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /* Observable suscrito y filtrando datos con pipe(map) y filter */
  suscripcion: Subscription = new Subscription;
  callObservableSubscribed() {
    this.profesores = this.rxjsService.obtenerObservableProfesores()
    console.log(this.profesores)
    this.suscrito = "Listado suscripción (Mayores de 30 años)"
  }


  /* Observable puro sin suscripción - Se muestar a través del pipe async en el html */
  callPureObservable(): void {
    this.observableConAsync = this.rxjsService.obtenerProfesoresParaSubscribe()

  }


  /* En el Ondestroy desuscribimos el observable que tiene la suscripción activa */
  ngOnDestroy() {
    this.suscripcion.unsubscribe
  }

}
