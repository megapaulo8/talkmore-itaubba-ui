import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/services/auth.service';
import { UserLogin } from '../../shared/models/user/authentication/user-login';
import { AuthenticationReturn } from '../../shared/models/user/authentication/authentication-return';

@Component({
  selector: 'app-acessar',
  templateUrl: './acessar.component.html',
  styleUrls: ['./acessar.component.sass']
})
export class AcessarComponent implements OnInit {

  public login: UserLogin;

  constructor(
    private _router: Router,
    private _authService: AuthService,
  ) {
    this.login = {
      email: '',
      password: ''
    }
  }

  ngOnInit(): void {
  }

  public realizarLogin(login: UserLogin) {
    this._authService.login(login)
      .subscribe((auth: AuthenticationReturn) => {
        this._authService.token = auth.token;
        this._router.navigateByUrl('/sistema');
      });
  }

}
