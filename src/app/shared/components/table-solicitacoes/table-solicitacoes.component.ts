import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NewRequest } from '../../models/ui/new-request';

@Component({
  selector: 'app-table-solicitacoes',
  templateUrl: './table-solicitacoes.component.html',
  styleUrls: ['./table-solicitacoes.component.sass']
})
export class TableSolicitacoesComponent implements OnInit {

  @Input() requests: Array<NewRequest>;
  @Output() editRequest = new EventEmitter<string>();
  @Output() deleteRequest = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
