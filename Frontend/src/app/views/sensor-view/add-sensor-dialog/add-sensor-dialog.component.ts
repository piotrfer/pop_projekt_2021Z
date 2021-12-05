import { Component, Input, OnInit } from '@angular/core';
import { IAddSensorView } from 'src/app/interfaces/view/iadd-sensor-view';
import { IAddSensorEventHandler } from 'src/app/interfaces/event-handler/iadd-sensor-event-handler';
import { AddSensorDialogFormComponent } from './add-sensor-dialog-form/add-sensor-dialog-form.component';
import { MatDialog } from '@angular/material/dialog';
import { PositiveDialogComponent } from '../../dialogs/positive-dialog/positive-dialog.component';
import { NegativeDialogComponent } from '../../dialogs/negative-dialog/negative-dialog.component';

@Component({
  selector: 'app-add-sensor-dialog',
  templateUrl: './add-sensor-dialog.component.html',
  styleUrls: ['./add-sensor-dialog.component.css']
})
export class AddSensorDialogComponent implements OnInit, IAddSensorView {
  @Input() addSensorEventHandler: IAddSensorEventHandler | undefined;
  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  showCreateSensorForm(): void {
    const dialogConfig = {
      width: '600px',
      data: { data1: 'value1', data2: 'value2' },
    };
    const dialogRef = this.dialog.open(
      AddSensorDialogFormComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((result) => {
      console.log("sensor dialog close result: ")
      console.log(result);
      // todo
      // create Sensor from received data (with controller)
      if(result) {
        const sensor = {
          //id: "cef0cbf3-6458-4f13-a418-ee4d7e7505dd", // it should be new valid uuid
          //location: [{"x": 1.0, "y": 1.2}, {"x": 1.0, "y": 1.2}, {"x": 1.0, "y": 1.2}],  // it should be Sensor location
          location: result.coordinates,
          model: result.sensorModel,
          type: result.sensorType
        };
        this.addSensorEventHandler!.saveSensorClicked(sensor);
      }
    });
  }
  showSensorCreationSuccessMessage(): void {
    const dialogConfig = {
      width: '600px',
      data: {}
    }
    const dialogRef = this.dialog.open(PositiveDialogComponent, dialogConfig);
    dialogRef.componentInstance.message = 'Sensor został dodany poprawnie!';
  }
  showSensorCreationFailureMessage(error: string): void {
    const dialogConfig = {
      width: '600px',
      data: {error: error}
    }
    const dialogRef = this.dialog.open(NegativeDialogComponent, dialogConfig);
    dialogRef.componentInstance.message = 'Sensor nie został dodany';
  }
}
