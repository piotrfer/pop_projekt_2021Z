import { IAddSensorEventHandler } from './iadd-sensor-event-handler';
import { ISensorListView } from '../view/isensor-list-view';

export interface ISensorListEventHandler {
  init(sensorList: ISensorListView, addSensorEventHandler: IAddSensorEventHandler): void;
  showAllSensorsClicked(): void;
  addSensorClicked(): void;
}
