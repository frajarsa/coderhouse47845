import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/users';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = "http://localhost:3000/users"


  usuarios: User[] = []

  constructor(
    private http: HttpClient
  ) {


  }
  get(): User[] {
    this.http.get<User[]>("http://localhost:3000/users").subscribe({
      next: (res) => this.usuarios = res
    })

    return this.usuarios
  }

}
