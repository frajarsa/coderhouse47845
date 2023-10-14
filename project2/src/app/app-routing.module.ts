import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './features/students/students.component';
import { LoginComponent } from './login/login.component';
import { StudentsTableComponent } from './features/students-table/students-table.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'classes', loadChildren: () => import('./features/classes/classes.module').then(m => m.ClassesModule) },
  { path: 'courses', loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
