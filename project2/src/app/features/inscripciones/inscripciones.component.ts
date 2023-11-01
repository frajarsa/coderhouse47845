import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/interfaces/curso';
import { Student } from 'src/app/interfaces/student';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { CoursesService } from 'src/app/services/courses.service';
import { LoginComponent } from '../../login/login.component';





@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})

export class InscripcionesComponent {

  newId() {
    return Math.floor(0.000000321 * Date.now())
  }



  cursos: Curso[] = this.coursesService.get()
  estudiantes: Student[] = this.alumnosService.get()


  form!: FormGroup;
  maxLength: number = 99999999;

  constructor(
    private fb: FormBuilder,
    private coursesService: CoursesService,
    private alumnosService: AlumnosService
  ) {
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

  addStudent() {
    this.form.get('id')?.setValue(this.newId())
    this.alumnosService.post(this.form.value)
    this.form.reset()
  }

}
