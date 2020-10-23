import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { NewRequest } from '../../models/ui/new-request';

@Component({
  selector: 'app-dialog-edit-request',
  templateUrl: './dialog-edit-request.component.html',
  styleUrls: ['./dialog-edit-request.component.sass']
})
export class DialogEditRequestComponent implements OnInit {

  public cnpjMask: any;
  public planTypes: Array<string>;
  public newRequestFormGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogEditRequestComponent>,
    @Inject(MAT_DIALOG_DATA) public request: NewRequest
  ) { }

  ngOnInit(): void {
    this.initialRequestFormGroup();
    this.initiateAllMasks();
    this.planTypes = ['P30', 'P60', 'P120'];
  }

  public initiateAllMasks() {
    this.cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/ , '-', /\d/, /\d/];
  }

  public initialRequestFormGroup() {
    this.newRequestFormGroup = new FormGroup({
      companyName: new FormControl(this.request.companyName, [Validators.required]),
      cnpj: new FormControl(this.request.cnpj, [Validators.required]),
      plan: new FormControl(this.request.plan, [Validators.required]),
      tax: new FormControl(this.request.tax, [Validators.required]),
      timeMinutes: new FormControl(this.request.timeMinutes, [Validators.required]),
      planValue: new FormControl(this.request.planValue, [Validators.required]),
      accessionDate: new FormControl(this.request.accessionDate, [Validators.required]),
      _id: new FormControl(this.request._id, []),
      sendData: new FormControl(this.request.sendData, [])
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.newRequestFormGroup.controls[controlName].hasError(errorName);
  }

  public onSubmit() {
    this.dialogRef.close(this.newRequestFormGroup.value);
  }

}
