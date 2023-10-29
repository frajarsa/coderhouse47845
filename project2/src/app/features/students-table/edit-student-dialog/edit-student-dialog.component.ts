import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/interfaces/student';
import { Curso } from 'src/app/interfaces/curso';
import courseData from '../../../../json/cursos.json';


const COURSE_DATA: Curso[] = courseData


@Component({
  selector: 'app-edit-student-dialog',
  templateUrl: './edit-student-dialog.component.html',
  styleUrls: ['./edit-student-dialog.component.scss']
})
export class EditStudentDialogComponent implements OnInit {

  studentForm: FormGroup;
  maxLength: number = 99999999

  constructor(
    private fb: FormBuilder,
    private ref: MatDialogRef<EditStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student,
  ) {
    this.studentForm = this.fb.group({
      id: new FormControl(data?.id),
      nombre: new FormControl(data?.nombre, Validators.required),
      apellido: new FormControl(data?.apellido, Validators.required),
      dni: new FormControl(data?.dni, [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.max(this.maxLength)]),
      email: new FormControl(data?.email, [Validators.required, Validators.email]),
      curso: new FormControl(data?.curso, Validators.required)
    })



  }

  ngOnInit(): void {
  }


  actualizar() {
    this.ref.close(this.studentForm.value);
  }


  closeDialog() {
    this.ref.close(this.studentForm.value)
  }


  cursos: Curso[] = COURSE_DATA


}
