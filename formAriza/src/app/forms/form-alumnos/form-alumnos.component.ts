import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-alumnos',
  templateUrl: './form-alumnos.component.html',
  styleUrls: ['./form-alumnos.component.scss'],
})

export class FormAlumnosComponent {
  cursos: string[] = ["Angular", "React", "Vue"]

  minimo: number = 2

  formularioAlumno: FormGroup = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(this.minimo)
    ]),
    apellido: new FormControl('', [
      Validators.required,
      Validators.minLength(this.minimo),
    ]),
    correo: new FormControl('', [
      Validators.email,
      Validators.required
    ]),
    telefono: new FormControl('', [
      Validators.minLength(11),
      Validators.maxLength(15),
      Validators.pattern(/^[0-9]+$/),
      Validators.required,
    ]),
    curso: new FormControl('', [
      Validators.required,
    ]),
  });
  constructor() { }

  enviarDatos() {
    console.log(this.formularioAlumno.controls)
    this.formularioAlumno.reset()
  }

}
