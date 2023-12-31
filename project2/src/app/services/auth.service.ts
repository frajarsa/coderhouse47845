import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/users';
import { Router } from '@angular/router';
import { BlockScrollStrategy } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url: string = "http://localhost:3000/users"
  public isAuthenticated: boolean = false
  public administrador: boolean = false

  constructor(private http: HttpClient) { }


  sessionStorage(): string | null {
    return sessionStorage.getItem("admin")
  }

  login(email: string): Observable<User[]> {

    return this.http.get<User[]>(this.url + "?email=" + email)
  }

  isAdmin(email: string): boolean {
    const responseArray = this.http.get<User[]>(this.url + "?email=" + email)
    responseArray
      .subscribe((res) => {
        if (res.length > 0) {
          res[0].role == "admin" ? this.administrador = true : this.administrador = false
          sessionStorage.setItem("admin", res[0].role)
        }
      })
    return this.administrador
  }

  logout(): void {
    sessionStorage.removeItem("admin")
  }
}