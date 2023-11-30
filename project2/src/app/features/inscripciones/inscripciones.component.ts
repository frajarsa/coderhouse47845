import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Curso } from 'src/app/interfaces/curso';
import { Student } from 'src/app/interfaces/student';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { CoursesService } from 'src/app/services/courses.service';



@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})

export class InscripcionesComponent implements OnInit {
  selection: string[] = ["Vue", "Angular", "React", "PowerBi"]
  cursos: Curso[] = []
  estudiantes: Student[] = []
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
      email: new FormControl("", [Validators.required, Validators.email]),
      dni: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.max(this.maxLength)]),
      curso: new FormControl("", Validators.required),
    })
  }
  
  
  newId() {
    return Math.floor(0.000000321 * Date.now())
  }
  
  ngOnInit() {
    this.coursesService.get().subscribe( (res) => this.cursos = res )
    this.alumnosService.get().subscribe( (res) => this.estudiantes = res )
  }
  

  newCourseAndStudent() {  }


  addStudent() {
    this.form.get('id')?.setValue(this.newId())
    console.log(this.form.value)
    this.alumnosService.post(this.form.value)
    this.form.reset()
  }

}
