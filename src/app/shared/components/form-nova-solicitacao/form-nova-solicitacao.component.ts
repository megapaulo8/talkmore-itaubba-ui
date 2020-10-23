import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

import { NewRequest } from '../../models/ui/new-request';

@Component({
  selector: 'app-form-nova-solicitacao',
  templateUrl: './form-nova-solicitacao.component.html',
  styleUrls: ['./form-nova-solicitacao.component.sass']
})
export class FormNovaSolicitacaoComponent implements OnInit {

  public cnpjMask: any;
  public planTypes: Array<string>;
  public newRequestFormGroup: FormGroup;

  @Output() public newRequestClick = new EventEmitter<NewRequest>();
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor() {
    this.initialRequestFormGroup();
    this.initiateAllMasks();
    this.planTypes = ['P30', 'P60', 'P120'];
  }

  ngOnInit(): void {
  }

  public initiateAllMasks() {
    this.cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/ , '-', /\d/, /\d/];
  }

  public initialRequestFormGroup() {
    this.newRequestFormGroup = new FormGroup({
      companyName: new FormControl('', [Validators.required]),
      cnpj: new FormControl('', [Validators.required]),
      plan: new FormControl('', [Validators.required]),
      tax: new FormControl(null, [Validators.required]),
      timeMinutes: new FormControl('', [Validators.required]),
      planValue: new FormControl(null, [Validators.required]),
      accessionDate: new FormControl('', [Validators.required])
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.newRequestFormGroup.controls[controlName].hasError(errorName);
  }

  public onSubmit() {
    this.newRequestClick.emit(this.newRequestFormGroup.value);
    setTimeout(() => this.formGroupDirective.resetForm(), 200);
  }
}
