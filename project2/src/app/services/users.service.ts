import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/users';
import { Observable, Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = "http://localhost:3000/users"


  constructor(
    private http: HttpClient
  ) {  }


  get() {
    return this.http.get<User[]>("http://localhost:3000/users")
  }

  post(usuario: User) {
    return this.http.post<User>(this.url, usuario)
  }

  put() {

  }

  delete() {

  }

}
