import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.scss'],


})
export class LeftbarComponent implements OnInit {

  listOfModules: string[] = []
  admin: string | null = ""

  constructor
    (
  ) {
    setTimeout(() => {
      sessionStorage.getItem("admin") == "admin" ? this.listOfModules = ["students", "courses", "enrollments", "users"] : this.listOfModules = ["students", "courses", "enrollments"]
    }, 100);
  }

  ngOnInit(): void {
  }
}
