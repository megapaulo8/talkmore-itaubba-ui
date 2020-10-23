import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './core/page/page/page.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: 'acessar',
        loadChildren: () => import('./login/login.module').then((module) => module.LoginModule)
      },
      {
        path: 'sistema',
        loadChildren: () => import('./sistema/sistema.module').then((module) => module.SistemaModule)
      },
      {
        path: '**',
        redirectTo: 'acessar'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    initialNavigation: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
