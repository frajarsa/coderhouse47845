import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './features/students/students.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { authGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [authGuard],
    children: [
      { path: "students", loadChildren: () => import('./features/students/students.module').then(m => m.StudentsModule) },
      { path: 'inscripciones', loadChildren: () => import('./features/inscripciones/inscripciones.module').then(m => m.InscripcionesModule) },
      { path: 'courses', loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule) },
      { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) }
    ]
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
