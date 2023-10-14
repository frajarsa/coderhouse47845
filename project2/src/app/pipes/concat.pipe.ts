import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../interfaces/student';

@Pipe({
  name: 'concat'
})
export class ConcatPipe implements PipeTransform {


  transform(value: Student): string {
    if (!value) {
      return '';
    }

    return value.nombre + " " + value.apellido

  }
}
