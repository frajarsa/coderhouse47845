import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { roleGuard } from 'src/app/guards/role.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: "students", loadChildren: () => import('./features/students/students.module').then(m => m.StudentsModule)
      },
      {
        path: 'enrollments', loadChildren: () => import('./features/inscripciones/inscripciones.module').then(m => m.InscripcionesModule)
      },
      {
        path: 'courses', loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule)
      },
      {
        path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule),
        canActivate: [roleGuard]
      }
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
