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
  public isAuthenticated : boolean =true

  constructor(private http: HttpClient) { }

  userFound(email: string): boolean {
    this.http.get <User[]> (`${this.url}?email=${email}`).subscribe(
      (value) => {
        console.log(value.length)
      if(value.length > 0) this.isAuthenticated = true ; this.isAuthenticated = false
      }
      
      );
    return true
    }

  login(email: string): Observable<User[]> {
    const response = this.http.get<User[]>(this.url + "?email=" + email)
    
    response.subscribe({
      next(x) {
        localStorage.setItem("autorizacion", x[0].token)

      },
      error(err) {
        console.error('algo falló: ' + err);
      }
    })
    return response
  }

  logout(): void {
    localStorage.removeItem("autorizacion");
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated
  }
}