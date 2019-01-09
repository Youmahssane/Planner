import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceuilComponent } from './acceuil/acceuil.component';
import { NbAuthComponent, NbLoginComponent, NbRegisterComponent } from '@nebular/auth';
import { AuthGuard } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { CrudUserComponent } from './acceuil/crud-user/crud-user.component';





export const routes: Routes = [
  { path: 'Home',
    component: HomeComponent
  },
  { path: 'cruduser',
  canActivate: [AuthGuard],
    component: CrudUserComponent
  },
  { path: 'Acceuil',
  canActivate: [AuthGuard],
  loadChildren: '../app/acceuil/acceuil/acceuil.module#AcceuilModule' },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      }

    ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
