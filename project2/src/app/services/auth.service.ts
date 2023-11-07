import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = "http://localhost:3000/users/"
  constructor(
    private http: HttpClient,
  ) {

  }


  login() {
    this.http.get(this.url).subscribe({
      next: (res) => console.log(res)
    })


  }

}
