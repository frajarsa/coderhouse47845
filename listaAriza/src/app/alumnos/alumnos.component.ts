import { Component } from '@angular/core';
import { Alumno } from '../interfaces/alumno';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
  standalone: false,
})
export class AlumnosComponent {
  lista: Alumno[] = [
    {
      nombre: 'Carlos',
      apellido: 'Sandoval',
      carrera: 'UX/UI',
      edad: 22,
      nota: 8,
      img: '../../assets/images/carlos.png',
    },
    {
      nombre: 'Luis',
      apellido: 'López',
      carrera: 'Web Dev',
      edad: 19,
      nota: 3,
      img: '../../assets/images/luis.jpg',
    },
    {
      nombre: 'Juana',
      apellido: 'Gonzalez',
      carrera: 'Diseño',
      edad: 23,
      nota: 5.2,
      img: '../../assets/images/juana.png',
    },
    {
      nombre: 'Victoria',
      apellido: 'Osorio',
      carrera: 'Arquitectura',
      edad: 21,
      nota: 9.5,
      img: '../../assets/images/victoria.png',
    },
    {
      nombre: 'Federico',
      apellido: 'Pérez',
      carrera: 'Arquitectura',
      edad: 26,
      nota: 10,
      img: '../../assets/images/federico.png',
    },
    {
      nombre: 'Nehemías',
      apellido: 'Martínez',
      carrera: 'Web Dev',
      edad: 40,
      nota: 9,
      img: '../../assets/images/nehemias.png',
    },
    {
      nombre: 'Andrés',
      apellido: 'Astorino',
      carrera: 'Web Dev',
      edad: 33,
      nota: 7,
      img: '../../assets/images/andres.jpg',
    },
    {
      nombre: 'Julián',
      apellido: 'Rosas',
      carrera: 'UX/UI',
      edad: 35,
      nota: 5.5,
      img: '../../assets/images/julian.png',
    },
  ];
}
