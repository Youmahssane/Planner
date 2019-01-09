import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarService,
   NbSidebarModule, NbCardModule, NbUserModule, NbMenuModule, NbDialogModule, NbSelectModule, NbAlertModule } from '@nebular/theme';
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken, 
  NbPasswordAuthStrategyOptions} from '@nebular/auth';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { AcceuilComponent } from './acceuil/acceuil.component';

import { NbAuthComponent } from './nb-auth/nb-auth.component';

import { AuthGuard } from './auth-guard.service';
import { NbLoginComponent } from './nb-auth/nb-login/nb-login.component';
import { NbRegisterComponent } from './nb-auth/nb-register/nb-register.component';
import { MenuService } from './menu.service';
import { HomeComponent } from './home/home.component';
import { CrudUserComponent } from './acceuil/crud-user/crud-user.component';













@NgModule({
  declarations: [
    AppComponent,
    NbLoginComponent,
    NbAuthComponent,
    NbRegisterComponent,
    HomeComponent,
    CrudUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    NbSidebarModule,
    HttpClientModule,
    NbCardModule,
    NbAuthModule,
    NbUserModule,
    NbSelectModule,
    ReactiveFormsModule,
    NbAlertModule,
    NbDialogModule.forRoot(),
    NbMenuModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
             class: NbAuthJWTToken,
             key: 'data.token',
             getter: (module: string, res: HttpResponse<Object>,
             options: NbPasswordAuthStrategyOptions) => res.body,

          },
          baseEndpoint: 'http://localhost:51266',
              login: {
                method: 'post',
                endpoint: '/api/Auths',
              },
              register: {
                method: 'post',
                endpoint: '/api/Registers',
              },
        }),
      ],
      forms: {
        login: {
          redirect: '/acceuil/acceuil',
        strategy: 'email',
        showMessages: {
          success: true,
          error: true,
        },
      },
      register: {
        redirectDelay: 300,
        redirect: '/auth/login',
        showMessages: {
          success: true,
        },
      },
    },
    }),
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule
  ],
  providers: [NbSidebarService, MenuService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
