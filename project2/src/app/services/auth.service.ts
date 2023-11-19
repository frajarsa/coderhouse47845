import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom, map } from 'rxjs';
import { User } from '../interfaces/users';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private tokenKey = 'auth_token';
  url: string = "http://localhost:3000/users"
  public isAuthenticated : boolean = false

  constructor(private http: HttpClient) { }

  userFound(email: string): void {
    this.login(email).subscribe(
      (value) => {
        if (value.length > 0) {
          this.isAuthenticated = true
        } else {
          this.isAuthenticated = false
        }
      }
    )
  }

  login(email: string): Observable<User[]> {
    const response = this.http.get<User[]>(this.url + "?email=" + email)
    
    response.subscribe({
      next(x) {
        console.log(x[0].token)
        localStorage.setItem("autorizacion", x[0].token)

      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    })
    return response
  }

  logout(): void {
    localStorage.removeItem("autorizacion");
  }

  getIsAuthenticated(): boolean {
    return !!localStorage.getItem("autorizacion");
  }
}