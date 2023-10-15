import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/interfaces/student';


@Component({
  selector: 'app-edit-student-dialog',
  templateUrl: './edit-student-dialog.component.html',
  styleUrls: ['./edit-student-dialog.component.scss']
})
export class EditStudentDialogComponent implements OnInit {
  inputData?: Student
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Student,
    private ref: MatDialogRef<EditStudentDialogComponent>,
    private fb: FormBuilder
  ) {
    this.inputData = this.data
    console.log(this.inputData)

  }

  ngOnInit(): void {
    console.log(this.inputData)

  }
  studentForm = this.fb.group({
    id: Math.floor(Math.random() * 100000),
    nombre: [this.inputData?.nombre, Validators.required],
    apellido: [this.inputData?.apellido, Validators.required],
    dni: [this.inputData?.dni, Validators.required],
    email: [this.inputData?.email, [Validators.required, Validators.email]],
    curso: [this.inputData?.curso, Validators.required],
  })

  saveStudent() {
    console.log(this.studentForm.value)
  }


  closeDialog() {
    const estu = this.studentForm.value
    this.ref.close(this.studentForm.value)
    console.log(this.studentForm.value)
  }

}
