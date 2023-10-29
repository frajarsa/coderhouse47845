import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './features/students/students.component';
import { LoginComponent } from './login/login.component';
import { StudentsTableComponent } from './features/students-table/students-table.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'courses', loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule) },
  { path: 'inscripciones', loadChildren: () => import('./features/inscripciones/inscripciones.module').then(m => m.InscripcionesModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
