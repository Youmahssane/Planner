import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';




@Injectable({
  providedIn: 'root'
})


export class MenuService {
}
export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    link: '/Acceuil',
    icon: 'nb-home'
  },
  {
    title: 'User account',
    link: '/',
    icon: 'nb-user'
  },
  {
    title: '',
    link: '/'
  }
 ];
