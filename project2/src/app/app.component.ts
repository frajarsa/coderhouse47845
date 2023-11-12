import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'project2';

  constructor(
    private usersService: UsersService, 
    private authService: AuthService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.navigateToDashboard()
  }

  navigateToDashboard() {
    if (this.authService.isAuthenticated == true) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/login']);
    }
  }


}
