import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from '../acceuil.component';
import { NbAccordionModule, NbTabsetModule, NbCardModule, NbSelectModule, NbToastrModule, NbProgressBarModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { CrudClientComponent } from '../crud-client/crud-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddVolComponent } from '../crud-client/add-vol/add-vol.component';




const routes: Routes = [
  {
    path: 'acceuil',
    component: AcceuilComponent
  },
  {
    path: 'crudc',
    component: CrudClientComponent
  },
  {
    path: 'addVol',
    component: AddVolComponent
  }
];
@NgModule({
  declarations: [AcceuilComponent, CrudClientComponent, AddVolComponent],
  imports: [
    CommonModule,
    NbAccordionModule,
    HttpClientModule,
    NbTabsetModule,
    NbProgressBarModule,
    NbToastrModule.forRoot(),
    NbCardModule,
    ReactiveFormsModule,
    FormsModule,
    NbSelectModule,
    RouterModule.forChild(routes)

  ],
  bootstrap: [AcceuilComponent]
})
export class AcceuilModule { }
