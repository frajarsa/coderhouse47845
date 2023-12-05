import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  title: string = "Universidad Eleftheria"
  constructor(
    private authService: AuthService
  ) {

  }
  logout() {
    this.authService.logout()
  }


}
