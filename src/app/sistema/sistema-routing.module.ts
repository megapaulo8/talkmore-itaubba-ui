import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SistemaComponent } from './sistema.component';
import { NovaSolicitacaoComponent } from './nova-solicitacao/nova-solicitacao.component';

const routes: Routes = [
  { path: '', redirectTo: 'nova-solicitacao', pathMatch: 'full' },
  {
    path: '',
    component: SistemaComponent,
    children: [
      { path: 'nova-solicitacao', component: NovaSolicitacaoComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SistemaRoutingModule {}
