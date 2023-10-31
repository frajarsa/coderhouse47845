import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Curso } from 'src/app/interfaces/curso';
import cursosdata from 'src/json/cursos.json'


const CURSOS_DATA: Curso[] = cursosdata;

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent {
  form!: FormGroup;
  maxLength: number = 99999999;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: new FormControl(""),
      nombre: new FormControl("", Validators.required),
      apellido: new FormControl("", Validators.required),
      dni: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.max(this.maxLength)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      curso: new FormControl("", Validators.required)
    })
  }

  newCourseAndStudent() {
  }

  tomarDatos() {
    console.log(this.form.value)
  }

  cursos: Curso[] = CURSOS_DATA;
}
