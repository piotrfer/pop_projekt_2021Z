import { SensorDto } from '../data-types/sensor-dto';
import { IAddSensorView } from './iadd-sensor-view';

export interface IAddSensorEventHandler {
  init(addSensorDialog: IAddSensorView): void;
  saveSensorClicked(Sensor: SensorDto): void;
  addSensorInvoked(): void;
}
