import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog-delete',
  templateUrl: './confirm-dialog-delete.component.html',
  styleUrls: ['./confirm-dialog-delete.component.css']
})
export class ConfirmDialogDeleteComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDialogDeleteComponent>){}
  public title="Are you sure ?";
  public message = "are you sure to delete this content"
  public cancelButton ="cancel"
  public confirmButton ="ok"

}
