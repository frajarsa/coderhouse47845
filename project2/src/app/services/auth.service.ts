import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom, map } from 'rxjs';
import { User } from '../interfaces/users';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url: string = "http://localhost:3000/users"
  public isAuthenticated = false;

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
    const params = { email: email };
    const response = this.http.get<User[]>(this.url + "?email=" + email)
    return response
  }




  logout(): void {
    this.isAuthenticated = false;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}

