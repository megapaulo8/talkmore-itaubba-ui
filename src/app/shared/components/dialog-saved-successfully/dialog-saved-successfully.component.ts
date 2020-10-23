import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-saved-successfully',
  templateUrl: './dialog-saved-successfully.component.html',
  styleUrls: ['./dialog-saved-successfully.component.sass']
})
export class DialogSavedSuccessfullyComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogSavedSuccessfullyComponent>,
    @Inject(MAT_DIALOG_DATA) public label: string
  ) { }

  ngOnInit(): void {
  }

}
