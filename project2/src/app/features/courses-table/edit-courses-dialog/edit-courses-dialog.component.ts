import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Curso } from 'src/app/interfaces/curso';
import { CoursesService } from '../../../services/courses.service';





@Component({
  selector: 'app-edit-courses-dialog',
  templateUrl: './edit-courses-dialog.component.html',
  styleUrls: ['./edit-courses-dialog.component.scss']
})
export class EditCoursesDialogComponent implements OnInit {
  categories: string[] = ["webdev", "datos"]
  courses: Curso[] = [];
  courseForm: FormGroup;
  maxLength: number = 99999999

  constructor(
    private coursesService: CoursesService,
    private fb: FormBuilder,
    private ref: MatDialogRef<EditCoursesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curso,
  ) {

    this.courseForm = this.fb.group({
      id: new FormControl(data?.id),
      name: new FormControl(data?.name, Validators.required),
      category: new FormControl(data?.category, Validators.required),
      number_of_students: new FormControl(data?.number_of_students, [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.max(this.maxLength)]),
      number_of_classes: new FormControl(data?.number_of_classes, [Validators.required, Validators.email]),
      fechaInicio: new FormControl(data?.fechaInicio, Validators.required),
      fechaFinal: new FormControl(data?.fechaFinal, Validators.required),
      classes: new FormControl(data?.classes, Validators.required)

    })}

  ngOnInit() {
      this.coursesService.get().subscribe( (res) => {this.courses = res} )
  }


  actualizar() {
    this.ref.close(this.courseForm.value);
  }


  closeDialog() {
    this.ref.close(this.courseForm.value)
  }


}
