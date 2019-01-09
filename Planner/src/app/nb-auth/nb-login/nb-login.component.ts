import { Component, OnInit } from '@angular/core';

import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-nb-login',
  templateUrl: './nb-login.component.html',
  styleUrls: ['./nb-login.component.scss']
})
export class NbLoginComponent implements OnInit {


  constructor( private sidebarService: NbSidebarService) {
  }

  ngOnInit() {
  }

}
