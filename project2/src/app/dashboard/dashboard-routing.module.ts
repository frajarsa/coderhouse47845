import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'inscripciones', loadChildren: () => import('../features/inscripciones/inscripciones.module').then(m => m.InscripcionesModule) },
  { path: 'courses', loadChildren: () => import('../features/courses/courses.module').then(m => m.CoursesModule) },
  { path: 'students', loadChildren: () => import('../features/students/students.module').then(m => m.StudentsModule) },


  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
