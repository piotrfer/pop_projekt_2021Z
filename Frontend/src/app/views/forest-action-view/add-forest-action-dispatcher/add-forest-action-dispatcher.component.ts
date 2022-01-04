import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ForestryDto } from 'src/app/data-types/forestry-dto';
import { IAddForestActionEventHandler } from 'src/app/interfaces/event-handler/iadd-forest-action-event-handler';
import { IAddForestActionView } from 'src/app/interfaces/view/iadd-forest-action-view';
import { CreateForestActionForm } from '../create-forest-action-form/create-forest-action-form.component';
import { ForestActionCreationFailureMessage } from '../forest-action-creation-failure-message/forest-action-creation-failure-message.component';
import { ForestActionCreationSuccessMessage } from '../forest-action-creation-success-message/forest-action-creation-success-message.component';
import { NoForestriesMessage } from '../no-forestries-message/no-forestries-message.component';
import { Spinner } from '../spinner/spinner.component';

@Component({
  selector: 'app-add-forest-action-dispatcher',
  templateUrl: './add-forest-action-dispatcher.component.html',
  styleUrls: ['./add-forest-action-dispatcher.component.css']
})
export class AddForestActionDispatcher implements IAddForestActionView {
  @Input() addForestActionEventHandler: IAddForestActionEventHandler|undefined; 

  constructor(public dialog: MatDialog) { }

  showCreateForestActionForm(forestries: ForestryDto[]): void {
    const dialogRef = this.dialog.open(CreateForestActionForm);
    dialogRef.componentInstance.addForestActionEventHandler = this.addForestActionEventHandler;
    dialogRef.componentInstance.forestries = forestries;
  }
  showForestActionCreationSuccessMessage(): void {
    const dialogRef = this.dialog.open(ForestActionCreationSuccessMessage);
  }
  showForestActionCreationFailureMessage(response: Response): void {
    const dialogRef = this.dialog.open(ForestActionCreationFailureMessage);
    dialogRef.componentInstance.response = response;
  }
  showNoForestriesMessage(): void {
    const dialogRef = this.dialog.open(NoForestriesMessage);
  }
  showSpinner(): void {
    const dialogRef = this.dialog.open(Spinner);
  }
}
