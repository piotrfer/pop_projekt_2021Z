import { Component, Input, OnInit } from '@angular/core';
import { IAddForestryView } from 'src/app/interfaces/iadd-forestry-view';
import { IAddForestryEventHandler } from 'src/app/interfaces/iadd-forestry-event-handler';
import { AddForestryDialogFormComponent } from './add-forestry-dialog-form/add-forestry-dialog-form.component';
import { MatDialog } from '@angular/material/dialog';
import { PositiveDialogComponent } from '../../dialogs/positive-dialog/positive-dialog.component';
import { NegativeDialogComponent } from '../../dialogs/negative-dialog/negative-dialog.component';

@Component({
  selector: 'app-add-forestry-dialog',
  templateUrl: './add-forestry-dialog.component.html',
  styleUrls: ['./add-forestry-dialog.component.css']
})
export class AddForestryDialogComponent implements OnInit, IAddForestryView {
  @Input() addForestryEventHandler: IAddForestryEventHandler | undefined;
  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  showCreateForestryForm(): void {
    const dialogConfig = {
      width: '600px',
      data: { data1: 'value1', data2: 'value2' },
    };
    const dialogRef = this.dialog.open(
      AddForestryDialogFormComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((result) => {
      console.log("afterClosed() result: ")
      console.log(result);
      // todo
      // create forestry from received data (with controller)
      if(result) {
        const forestry = {
          //id: "cef0cbf3-6458-4f13-a418-ee4d7e7505dd", // it should be new valid uuid
          //location: [{"x": 1.0, "y": 1.2}, {"x": 1.0, "y": 1.2}, {"x": 1.0, "y": 1.2}],  // it should be forestry location
          location: result.coordinates,
          name: result.forestryName,
        };
        this.addForestryEventHandler!.saveForestryClicked(forestry);
      }
    });
  }
  showForestryCreationSuccessMessage(): void {
    const dialogConfig = {
      width: '600px',
      data: {}
    }
    const dialogRef = this.dialog.open(PositiveDialogComponent, dialogConfig);
    dialogRef.componentInstance.message = 'Leśnictwo zostało dodane poprawnie!';
  }
  showForestryCreationFailureMessage(error: string): void {
    const dialogConfig = {
      width: '600px',
      data: {error: error}
    }
    const dialogRef = this.dialog.open(NegativeDialogComponent, dialogConfig);
    dialogRef.componentInstance.message = 'Błąd! Leśnictwo nie zostało dodane!';
  }
}
