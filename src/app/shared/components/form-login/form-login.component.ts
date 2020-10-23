import { FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { UserLogin } from '../../models/user/authentication/user-login';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.sass']
})
export class FormLoginComponent implements OnInit {

  public hide: boolean;
  @Input() public login: UserLogin;
  @Output() loginUser = new EventEmitter<UserLogin>();

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() {
    this.hide = true;
  }

  ngOnInit(): void {
  }

  public getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Você deve inserir o seu e-mail';
    }

    return this.email.hasError('email') ? 'Email inválido' : '';
  }

}
