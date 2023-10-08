import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.scss'],
  standalone: true,
  imports: [
    MatSidenavModule,
  ]
})
export class LeftbarComponent {

}
