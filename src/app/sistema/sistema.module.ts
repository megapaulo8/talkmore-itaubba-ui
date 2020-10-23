import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemaComponent } from './sistema.component';
import { SharedModule } from '../shared/modules/shared.module';
import { SistemaRoutingModule } from './sistema-routing.module';
import { NovaSolicitacaoComponent } from './nova-solicitacao/nova-solicitacao.component';

@NgModule({
  declarations: [SistemaComponent, NovaSolicitacaoComponent],
  imports: [
    CommonModule,
    SharedModule,
    SistemaRoutingModule
  ]
})
export class SistemaModule { }
