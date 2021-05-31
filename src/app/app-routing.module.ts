import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { signupComponent } from './auth/signup/signup.component';


const routes: Routes = [
   { path: 'sign-up', component: signupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }