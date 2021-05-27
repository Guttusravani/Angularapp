import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';




const routes: Routes = [
  { path: 'home', component: AppComponent, canActivate : [AuthGuard] },
  { path: 'login', component : LoginComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
