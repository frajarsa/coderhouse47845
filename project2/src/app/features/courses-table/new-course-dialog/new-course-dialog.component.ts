import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Curso } from 'src/app/interfaces/curso';
import { CoursesService } from '../../../services/courses.service';




@Component({
  selector: 'app-new-course-dialog',
  templateUrl: './new-course-dialog.component.html',
  styleUrls: ['./new-course-dialog.component.scss']
})
export class NewCourseDialogComponent implements OnInit {
  categories: string[] = ["webdev", "datos"]
  selection: string[] = ["Angular", "React", "Vue", "PowerBi"]
  coursesNames: string[] = []
  cursos: Curso[] = [];
  courseForm: FormGroup;
  maxLength: number = 99999999

  constructor(
    private coursesService: CoursesService,
    private fb: FormBuilder,
    private ref: MatDialogRef<NewCourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curso,
  ) 
  {
    this.courseForm = this.fb.group({
      id: new FormControl(data?.id),
      name: new FormControl(data?.name, Validators.required),
      category: new FormControl(data?.category, Validators.required),
      fechaInicio: new FormControl(data?.fechaInicio, Validators.required),
      fechaFinal: new FormControl(data?.fechaFinal, Validators.required),
      classes: new FormControl(data?.classes, Validators.required)
    })
  }

  ngOnInit() {
      this.coursesService.get().subscribe( 
        (res) => {
        this.cursos = res
      })
  }


  actualizar() {
    this.ref.close(this.courseForm.value);
  }


  closeDialog() {
    this.ref.close(this.courseForm.value)
  }


}
