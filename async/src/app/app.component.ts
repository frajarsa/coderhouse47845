import { Component, OnDestroy } from '@angular/core';
import { Teacher } from './interfaces/teacher';
import { RxjsService } from './services/rxjs.service';
import { Observable, Subscription, filter, interval, map} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy  {
  
  title = 'async'
  suscrito = ""
  
  profesoresPromesa: Teacher[] = []
  observableConAsync = new Observable()
  profesores: Teacher[] = []

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
  callObservableSubscribed(): void {
    this.suscripcion = this.rxjsService.obtenerObservableProfesores()
    .pipe(
      map( data => data.filter( x => x.age > 30 ))
         )
      .subscribe({
      next: (v) => {
          this.profesores = v
          this.suscrito = "Listado suscripción (Mayores de 30 años)"    
          },
    } )
  }

 
 /* Observable puro sin suscripción - Se muestar a través del pipe async en el html */
  callPureObservable(): void {
    this.observableConAsync = this.rxjsService.obtenerObservableProfesores()
  }

  
  /* En el Ondestroy desuscribimos el observable que tiene la suscripción activa */
  ngOnDestroy() { 
     this.suscripcion.unsubscribe
}

}
