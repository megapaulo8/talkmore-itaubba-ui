import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import { LoginRoutingModule } from './login-routing.module';
import { AcessarComponent } from './acessar/acessar.component';
import { SharedModule } from './../shared/modules/shared.module';

@NgModule({
  declarations: [LoginComponent, AcessarComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
