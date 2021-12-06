import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ForestryDto } from 'src/app/data-types/forestry-dto';
import { IAssignForestryEventHandler } from 'src/app/interfaces/event-handler/iassign-forestry-event-handler';
import { IAssignForestryShower } from 'src/app/interfaces/view/iassign-forestry-shower';
import { AssignForestryDialogComponent } from '../assign-forestry-dialog/assign-forestry-dialog.component';
import { ErrorModalComponent } from '../error-modal/error-modal.component';
import { NoForestriesModalComponent } from '../no-forestries-modal/no-forestries-modal.component';
import { SuccessModalComponent } from '../success-modal/success-modal.component';

@Component({
  selector: 'app-assign-forestry-shower',
  templateUrl: './assign-forestry-shower.component.html',
  styleUrls: ['./assign-forestry-shower.component.css']
})
export class AssignForestryShowerComponent implements IAssignForestryShower {
  @Input() assignForestryEventHandler: IAssignForestryEventHandler | undefined;

  constructor(public dialog: MatDialog) {}

  showAvailableForestries(forestries: ForestryDto[]): void {
    const dialogRef = this.dialog.open(AssignForestryDialogComponent);
    dialogRef.componentInstance.assignForestryEventHandler = this.assignForestryEventHandler;
    dialogRef.componentInstance.forestries = forestries;
  }

  showNoForestriesMessage(): void {
    this.dialog.open(NoForestriesModalComponent);
  }

  showSuccessMessage(): void {
    this.dialog.open(SuccessModalComponent);
  }

  showErrorMessage(response: { body: string }): void {
    const dialogRef = this.dialog.open(ErrorModalComponent);
    dialogRef.componentInstance.response = response;
  }
}
