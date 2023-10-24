import { Component } from '@angular/core';
import { Teacher } from './interfaces/teacher';
import { RxjsService } from './services/rxjs.service';
import { Subject, observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'async';

  profesores: any = []

  constructor(private rxjsService: RxjsService) {
    this.rxjsService.obtenerPromiseTeachers()
      .then((teachers) => {
        this.profesores = teachers
      })
      .catch((error) => {
        console.log(error)
      });
    this.rxjsService.obtenerObservableProfesores().subscribe((x) => {
      console.log(x)
    })
  }



}
