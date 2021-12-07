import { IAddSensorEventHandler } from './iadd-sensor-event-handler';
import { ISensorListShower } from '../view/isensor-list-shower';
import { IAssignForestryEventHandler } from './iassign-forestry-event-handler';

export interface ISensorListEventHandler {
  init(sensorList: ISensorListShower, addSensorEventHandler: IAddSensorEventHandler, assignForestryEventHandler: IAssignForestryEventHandler): void;
  showAllSensorsClicked(): void;
  addSensorClicked(): void;
  assignForestryClicked(sensorId: string): void;
}
