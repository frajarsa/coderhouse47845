import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/users';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = "http://localhost:3000/users"






  constructor(private http: HttpClient) {  }


  get(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getCourse(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  post(usuario: User): Observable<User> {
    return this.http.post<User>(this.url, usuario)
  }

  delete(id: string): Observable<void> {
      return this.http.delete<void>(`${this.url}/${id}`);
  
    }

  put(usuario: User): Observable<User> {
    return this.http.put<User>(`${this.url}/${usuario.id}`, usuario)
  }

}
