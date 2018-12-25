import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { InscComponent } from './insc/insc.component';


export const routes: Routes = [
  {path: 'Auth', component: AuthComponent},
  {path: 'Insc', component: InscComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
