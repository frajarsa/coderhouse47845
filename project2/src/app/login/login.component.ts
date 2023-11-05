import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})




export class LoginComponent {

  constructor (private router: Router) {

  }


password: any= ""

showSpinner: boolean = true

username: string= ""

login() : void {
  if(this.username == 'admin' && this.password == 'admin'){
   this.router.navigate(["dashboard"]);
  }else {
    alert("Invalid credentials");
  }
}
}


