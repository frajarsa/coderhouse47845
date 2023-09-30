import { Component, Input } from '@angular/core';
import { People } from 'src/app/interfaces/people';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent {
 @Input() gente?: People[];
}
