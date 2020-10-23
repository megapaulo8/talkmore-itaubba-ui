import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { NewRequest } from '../../shared/models/ui/new-request';
import { RequestService } from '../../shared/services/request.service';
import { DialogEditRequestComponent } from '../../shared/components/dialog-edit-request/dialog-edit-request.component';
import { DialogSavedSuccessfullyComponent } from '../../shared/components/dialog-saved-successfully/dialog-saved-successfully.component';
import { DialogConfirmDeleteRequestComponent } from '../../shared/components/dialog-confirm-delete-request/dialog-confirm-delete-request.component';

@Component({
  selector: 'app-nova-solicitacao',
  templateUrl: './nova-solicitacao.component.html',
  styleUrls: ['./nova-solicitacao.component.sass']
})
export class NovaSolicitacaoComponent implements OnInit {

  public requests: Array<NewRequest>;

  constructor(
    private _matDialog: MatDialog,
    private _requestService: RequestService
  ) {}

  ngOnInit(): void {
    this.getNewRequests();
  }

  public sendNewRequest(newRequest: NewRequest) {
    newRequest.sendData = new Date();
    this._requestService.postRequest(newRequest)
      .subscribe(() => {
        this.openDialogSuccess('Solicitação criada com sucesso!');
      });
  }

  public getNewRequests() {
    this._requestService.getRequests()
      .subscribe((requests: NewRequest[]) => this.requests = requests);
  }

  public editRequest(requestId: string) {
    this.getRequestById(requestId);
  }

  public deleteRequest(requestId: string) {
    this.openDialogDeleteRequest(requestId);
  }

  public openDialogDeleteRequest(id: string) {
    this._matDialog.open(DialogConfirmDeleteRequestComponent, {
      data: id
    }).afterClosed().subscribe((requestId: string) => {
      if (!requestId) return;
      this.removeRequest(requestId);
    });
  }

  public removeRequest(id: string) {
    this._requestService.deleteRequestById(id)
      .subscribe((deleted) => {
        if (deleted) this.openDialogSuccess('Solicitação apagada com sucesso!');
      })
  }

  public getRequestById(id: string) {
    this._requestService.getRequestById(id)
      .subscribe((request: NewRequest) => this.openDialogEditRequest(request));
  }

  public openDialogEditRequest(request: NewRequest) {
    this._matDialog.open(DialogEditRequestComponent, {
      data: request
    }).afterClosed().subscribe((editedRequest: NewRequest) => {
      if (!editedRequest) return;
      this.saveRequest(editedRequest);
    });
  }

  public saveRequest(request: NewRequest) {
    this._requestService.editRequest(request)
      .subscribe((saved) => {
        if (saved) this.openDialogSuccess('Solicitação salva com sucesso!');
      });
  }

  public openDialogSuccess(label: string) {
    this._matDialog.open(DialogSavedSuccessfullyComponent,
      {
        data: label
      }).afterClosed().subscribe(() => this.getNewRequests());
  }
}
