import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './crud-user/user';

@Injectable({
  providedIn: 'root'
})
export class GetRoleService {

  currentRole: String;
  constructor(private http: HttpClient) { }

  public setRole(role: String) {
      this.currentRole = role;
      
  }
  public getRole(): String{
        return this.currentRole;
  }
}
