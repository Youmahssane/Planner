import { Component, OnInit, EventEmitter } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { Router } from '@angular/router';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { GetRoleService } from './acceuil/get-role.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: Array<string> ;
  userName: String = '';
  mytoken: Boolean = false;
  role: String = '';
 
  
  constructor(private authService: NbAuthService,  
     private sidebarService: NbSidebarService, private router: Router,
  public roleService: GetRoleService) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (this.mytoken = token.isValid()) {
          this.user = token.getPayload();
          this.userName = this.user['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'].split('-')[0];
          this.role =  this.user['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'].split('-')[1];

            roleService.setRole(this.role);
        }

      });
  }







  toInsc() {
    this.router.navigate(['/auth/register']);
  }
  toConect() {
    this.router.navigate(['/auth/login']);
  }
  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}


