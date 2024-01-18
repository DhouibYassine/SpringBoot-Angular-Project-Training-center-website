import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-subscribe-dialog',
  templateUrl: './subscribe-dialog.component.html',
  styleUrls: ['./subscribe-dialog.component.css']
})
export class SubscribeDialogComponent {
  constructor(public dialogRef:
    MatDialogRef<SubscribeDialogComponent>){}//forçage de type pour ce composant pour etre toujours sous la forme d'une boite

  public title = "are you sure?";
  public content = "Do you really want to subscribe to this cource ?";
  public cancelButton = "Cancel";
  public confirmButton = "Confirm";
}
