import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from 'src/app/interfaces/student';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-new-student-dialog',
  templateUrl: './new-student-dialog.component.html',
  styleUrls: ['./new-student-dialog.component.scss'],
})
export class NewStudentDialogComponent {
  coursesNames: string[] = ['Angular', 'React', 'Vue', 'PowerBi'];
  estudiantes: Student[] = [];
  studentForm: FormGroup;
  maxLength: number = 99999999;

  constructor(
    private alumnosService: AlumnosService,
    private fb: FormBuilder,
    private ref: MatDialogRef<NewStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student
  ) {
    this.studentForm = this.fb.group({
      id: new FormControl(data?.id),
      nombre: new FormControl(data?.nombre, Validators.required),
      apellido: new FormControl(data?.apellido, Validators.required),
      email: new FormControl(data?.email, [
        Validators.required,
        Validators.email,
      ]),
      dni: new FormControl(data?.dni, [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
        Validators.max(this.maxLength),
      ]),
      curso: new FormControl(data?.curso, Validators.required),
    });
  }

  ngOnInit() {
    this.alumnosService.get().subscribe((res) => {
      this.estudiantes = res;
    });
  }

  actualizar() {
    this.ref.close(this.studentForm.value);
  }

  closeDialog() {
    this.ref.close(this.studentForm.value);
  }
}
