import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-alumnos',
  templateUrl: './form-alumnos.component.html',
  styleUrls: ['./form-alumnos.component.scss'],
})

export class FormAlumnosComponent {
  cursos: string[] = ["Angular", "React", "Vue"]


  minlen: number = 5;

  formularioAlumno: FormGroup = new FormGroup({
    nombre: new FormControl('', [
      Validators.minLength(this.minlen),
      Validators.required,
    ]),
    apellido: new FormControl('', [
      Validators.minLength(this.minlen),
      Validators.required,
    ]),
    correo: new FormControl('', [
      Validators.email,
      Validators.required
    ]),
    telefono: new FormControl('', [
      Validators.minLength(9),
      Validators.maxLength(44),
      Validators.required,
    ]),
    curso: new FormControl('', [
      Validators.required,
    ]),
  });
  constructor() { }

  enviarDatos() {
    console.log(this.formularioAlumno)
  }

  nombreValidate(evento : Event) {
console.log(evento)
  }

}
