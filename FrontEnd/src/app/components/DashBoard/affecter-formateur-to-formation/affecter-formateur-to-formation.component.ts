import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-affecter-formateur-to-formation',
  templateUrl: './affecter-formateur-to-formation.component.html',
  styleUrls: ['./affecter-formateur-to-formation.component.css']
})
export class AffecterFormateurToFormationComponent {
  constructor(
    public dialogRef: MatDialogRef<AffecterFormateurToFormationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSubmit() {
    // Perform any necessary actions or validations
    // Then close the modal with the 'submit' result
    this.dialogRef.close('submit');
  }

  onCancel() {
    // Close the modal with the 'cancel' result
    this.dialogRef.close('cancel');
  }
  
}
