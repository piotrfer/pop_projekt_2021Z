import { IAddSensorView } from 'src/app/interfaces/iadd-sensor-view';
import { IAddSensorEventHandler } from 'src/app/interfaces/iadd-sensor-event-handler';
import { SensorDto } from 'src/app/data-types/sensor-dto';
import { SensorAPI } from 'src/app/interfaces/sensor-api';

export class AddSensorEventHandler implements IAddSensorEventHandler {
  private addSensorDialog: IAddSensorView|undefined;
  private apiProxy: SensorAPI;

  constructor(private api: SensorAPI) {
    this.apiProxy = api;
  }

  init(addSensorDialog: IAddSensorView) {
    this.addSensorDialog = addSensorDialog;
  }
  saveSensorClicked(sensor: SensorDto): void {
    this.apiProxy.save(sensor).subscribe((response) => {
      this.addSensorDialog!.showSensorCreationSuccessMessage();
      console.log(response);
    }, (error => {
      this.addSensorDialog!.showSensorCreationFailureMessage(error.statusText);
    }));

  }
  addSensorInvoked(): void {
    this.addSensorDialog!.showCreateSensorForm()
  }
}
