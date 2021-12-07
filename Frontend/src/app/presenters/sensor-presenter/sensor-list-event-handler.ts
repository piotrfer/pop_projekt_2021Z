import { ISensorListShower } from 'src/app/interfaces/view/isensor-list-shower';
import { ISensorListEventHandler } from 'src/app/interfaces/event-handler/isensor-list-event-handler';
import { SensorAPI } from 'src/app/interfaces/api/sensor-api';
import { IAddSensorEventHandler } from 'src/app/interfaces/event-handler/iadd-sensor-event-handler';

export class SensorListEventHandler implements ISensorListEventHandler {
  private SensorList: ISensorListShower | undefined;
  private addSensorEventHandler: IAddSensorEventHandler | undefined;
  private apiProxy: SensorAPI;

  constructor(private api: SensorAPI) {
    this.apiProxy = api;
  }

  init(SensorList: ISensorListShower, addSensorEventHandler: IAddSensorEventHandler) {
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
