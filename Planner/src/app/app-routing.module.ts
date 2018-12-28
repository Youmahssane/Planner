import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { InscComponent } from './insc/insc.component';
import { AcceuilComponent } from './acceuil/acceuil.component';


export const routes: Routes = [
  {path: 'Auth', component: AuthComponent},
  {path: 'Insc', component: InscComponent},
  {path: 'Acceuil', component: AcceuilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
