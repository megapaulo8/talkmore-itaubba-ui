import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { TextMaskModule } from 'angular2-text-mask';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NameAbbreviationPipe } from '../pipes/name-abbreviation.pipe';
import { BrazilianCurrencyPipe } from '../pipes/brazilian-currency.pipe';
import { HeaderComponent } from '../../core/page/header/header.component';
import { FormLoginComponent } from './../components/form-login/form-login.component';
import { TableSolicitacoesComponent } from '../components/table-solicitacoes/table-solicitacoes.component';
import { DialogEditRequestComponent } from '../components/dialog-edit-request/dialog-edit-request.component';
import { FormNovaSolicitacaoComponent } from '../components/form-nova-solicitacao/form-nova-solicitacao.component';
import { DialogSavedSuccessfullyComponent } from '../components/dialog-saved-successfully/dialog-saved-successfully.component';
import { DialogConfirmDeleteRequestComponent } from '../components/dialog-confirm-delete-request/dialog-confirm-delete-request.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FormLoginComponent,
    NameAbbreviationPipe,
    BrazilianCurrencyPipe,
    DialogEditRequestComponent,
    TableSolicitacoesComponent,
    FormNovaSolicitacaoComponent,
    DialogSavedSuccessfullyComponent,
    DialogConfirmDeleteRequestComponent
  ],
  entryComponents: [
    DialogEditRequestComponent,
    DialogSavedSuccessfullyComponent,
    DialogConfirmDeleteRequestComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    TextMaskModule,
    MaterialModule,
    MatTooltipModule,
    CurrencyMaskModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    TextMaskModule,
    MaterialModule,
    HeaderComponent,
    MatTooltipModule,
    CurrencyMaskModule,
    FormLoginComponent,
    ReactiveFormsModule,
    TableSolicitacoesComponent,
    FormNovaSolicitacaoComponent
  ]
})
export class SharedModule { }
