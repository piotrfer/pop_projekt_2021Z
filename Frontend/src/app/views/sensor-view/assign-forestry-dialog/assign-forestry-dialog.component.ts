import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ForestryDto } from 'src/app/data-types/forestry-dto';
import { IAssignForestryEventHandler } from 'src/app/interfaces/event-handler/iassign-forestry-event-handler';

@Component({
  selector: 'app-assign-forestry-dialog',
  templateUrl: './assign-forestry-dialog.component.html',
  styleUrls: ['./assign-forestry-dialog.component.css']
})
export class AssignForestryDialogComponent {
  @Input() assignForestryEventHandler: IAssignForestryEventHandler | undefined;
  @Input() forestries: ForestryDto[] | undefined;
  @Input() sensorId: string | undefined;

  constructor(public dialogRef: MatDialogRef<AssignForestryDialogComponent>) {}

  forestrySelected(forestryId: string) {
    this.assignForestryEventHandler!.forestrySelected(forestryId, this.sensorId!);
    this.dialogRef.close()
  }
}
