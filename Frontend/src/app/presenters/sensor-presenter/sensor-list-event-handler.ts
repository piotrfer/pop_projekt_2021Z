import { ISensorListView } from 'src/app/interfaces/isensor-list-view';
import { ISensorListEventHandler } from 'src/app/interfaces/isensor-list-event-handler';
import { SensorAPI } from 'src/app/interfaces/sensor-api';
import { IAddSensorEventHandler } from 'src/app/interfaces/iadd-sensor-event-handler';

export class SensorListEventHandler implements ISensorListEventHandler {
  private SensorList: ISensorListView | undefined;
  private addSensorEventHandler: IAddSensorEventHandler | undefined;
  private apiProxy: SensorAPI;

  constructor(private api: SensorAPI) {
    this.apiProxy = api;
  }

  init(SensorList: ISensorListView, addSensorEventHandler: IAddSensorEventHandler) {
    this.SensorList = SensorList;
    this.addSensorEventHandler = addSensorEventHandler;
  }

  showAllSensorsClicked(): void {
    this.apiProxy.getAll().subscribe((sensors) => {
      this.SensorList!.showSensors(sensors);
    });
  }

  addSensorClicked(): void {
    this.addSensorEventHandler!.addSensorInvoked();
  }
}
