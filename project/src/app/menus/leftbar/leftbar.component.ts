import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.scss']
})
export class LeftbarComponent {
  @ViewChild('sidenav') sidenav?: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav?.close();
  }

}
