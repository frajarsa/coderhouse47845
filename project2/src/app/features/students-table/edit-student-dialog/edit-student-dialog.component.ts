import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/interfaces/student';


@Component({
  selector: 'app-edit-student-dialog',
  templateUrl: './edit-student-dialog.component.html',
  styleUrls: ['./edit-student-dialog.component.scss']
})
export class EditStudentDialogComponent implements OnInit {

  studentForm: FormGroup;




  constructor(
    private fb: FormBuilder,
    private ref: MatDialogRef<EditStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student,
  ) {
    this.studentForm = fb.group({
      id: new FormControl(data?.id),
      nombre: new FormControl(data?.nombre, Validators.required),
      apellido: new FormControl(data?.apellido, Validators.required),
      dni: new FormControl(data?.dni, Validators.required),
      email: new FormControl(data?.email, Validators.required),
      curso: new FormControl(data?.curso, Validators.required)
    })


  }

  ngOnInit(): void {
    console.log(this.data)

  }


  actualizar() {
    console.log(this.studentForm.value);
    this.ref.close(this.studentForm.value);
  }


  closeDialog() {
    this.ref.close(this.studentForm.value)
  }

  cursos: any[] = [
    { nombre: "Angular" },
    { nombre: "React" },
    { nombre: "View" }]

}
