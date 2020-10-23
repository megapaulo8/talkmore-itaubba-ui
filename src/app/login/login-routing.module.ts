import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login.component";
import { AcessarComponent } from './acessar/acessar.component';

const routes: Routes = [
  { path: '', redirectTo: 'entrar', pathMatch: 'full' },
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: 'entrar', component: AcessarComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
