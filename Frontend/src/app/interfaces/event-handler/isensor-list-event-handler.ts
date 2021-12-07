import { IAddSensorEventHandler } from './iadd-sensor-event-handler';
import { ISensorListShower } from '../view/isensor-list-shower';

export interface ISensorListEventHandler {
  init(sensorList: ISensorListShower, addSensorEventHandler: IAddSensorEventHandler): void;
  showAllSensorsClicked(): void;
  addSensorClicked(): void;
}
