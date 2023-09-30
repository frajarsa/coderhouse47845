import { Component } from '@angular/core';
import { People } from '../../interfaces/people'

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent {

  constructor() {
  
  }
  people: People[] = [
    { name: 'John', lastName: 'Doe', age: 30 },
    { name: 'Jane', lastName: 'Doe', age: 25 },
    { name: 'Peter', lastName: 'Parker', age: 20 },
    { name: 'Mary', lastName: 'Jane', age: 18 },
  ];
  


}
