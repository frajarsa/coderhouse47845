import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './features/students/students.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { AuthGuard } from 'src/app/guards/authguard.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
