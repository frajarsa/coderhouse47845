import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Curso } from 'src/app/interfaces/curso';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-confirmar-borrado',
  templateUrl: './confirmar-borrado.component.html',
  styleUrls: ['./confirmar-borrado.component.scss'],
})
export class ConfirmarBorradoComponent implements OnInit {
  courses!: Curso[];

  constructor(
    private coursesService: CoursesService,
    private ref: MatDialogRef<ConfirmarBorradoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curso
  ) {}

  ngOnInit() {
    this.coursesService.get().subscribe((res) => {
      this.courses = res;
    });
  }

  closeDialogBorrar() {
    this.ref.close(this.data.id);
    this.coursesService.get().subscribe((res) => {
      this.courses = res;
    });
  }
}
