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

  login() {
    this.authService.userFound(this.loginForm.get('email')?.value)
    this.authService.login(this.loginForm.get('email')?.value)
      .subscribe(
        (x) => {
          if (x.length > 0) {
            this.router.navigate(['/dashboard'])
          } else {
            alert("No existe el usuario")
          }
        }
      )
  }


}
