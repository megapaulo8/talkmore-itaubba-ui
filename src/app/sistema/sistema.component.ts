import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UserData } from '../shared/models/user/user-data';
import { AuthService } from '../shared/services/auth.service';
import { ProfileService } from '../shared/services/profile.service';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.sass']
})
export class SistemaComponent implements OnInit {

  public userInfo: UserData;

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.getProfileInfo();
  }

  public getProfileInfo() {
    this._profileService.getLoggedProfile()
      .subscribe((userInfo: UserData) => this.userInfo = userInfo);
  }

  public logout() {
    this._authService.logout();
    this._router.navigateByUrl('/acessar');
  }

}
