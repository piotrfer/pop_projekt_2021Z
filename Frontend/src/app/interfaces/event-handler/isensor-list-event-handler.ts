import { IAddSensorEventHandler } from './iadd-sensor-event-handler';
import { ISensorListView } from '../view/isensor-list-view';
import { IAssignForestryEventHandler } from './iassign-forestry-event-handler';

export interface ISensorListEventHandler {
  init(sensorList: ISensorListView, addSensorEventHandler: IAddSensorEventHandler, assignForestryEventHandler: IAssignForestryEventHandler): void;
  showAllSensorsClicked(): void;
  addSensorClicked(): void;
  assignForestryClicked(sensorId: string): void;
}
