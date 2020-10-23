import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirm-delete-request',
  templateUrl: './dialog-confirm-delete-request.component.html',
  styleUrls: ['./dialog-confirm-delete-request.component.sass']
})
export class DialogConfirmDeleteRequestComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmDeleteRequestComponent>,
    @Inject(MAT_DIALOG_DATA) public requestId: string
  ) { }

  ngOnInit(): void {
  }

}
