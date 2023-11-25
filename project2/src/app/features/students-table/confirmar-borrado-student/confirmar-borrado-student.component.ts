import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from 'src/app/interfaces/student';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-confirmar-borrado-student',
  templateUrl: './confirmar-borrado-student.component.html',
  styleUrls: ['./confirmar-borrado-student.component.scss']
})
export class ConfirmarBorradoStudentComponent implements OnInit {
  alumnos!: Student[]


  constructor(private alumnosService: AlumnosService,
    private ref: MatDialogRef<ConfirmarBorradoStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student,
  ) { }

  ngOnInit() {
    this.alumnosService.get().subscribe((res) => { this.alumnos = res })
  }

  closeDialogBorrar() {
    this.ref.close(this.data.id);
  }
}
