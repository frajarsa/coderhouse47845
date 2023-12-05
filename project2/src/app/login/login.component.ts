import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, pluck } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})




export class LoginComponent {
  loginForm!: FormGroup;
  validado: boolean = false
  admin: boolean = true


  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.loginForm = this.fb.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      pw: new FormControl("", Validators.required),

    })
  }

  login(): void {
    this.authService.login(this.loginForm.get('email')?.value).subscribe(
      (res) => {
        if (res.length > 0) {
          this.authService.isAdmin(this.loginForm.get('email')?.value)
          this.admin = this.authService.administrador
          this.router.navigate(["/dashboard"])
        }
      }
    )
  }
}
