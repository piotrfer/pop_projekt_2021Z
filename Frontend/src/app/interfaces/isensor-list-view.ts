import { SensorDto } from '../data-types/sensor-dto';

export interface ISensorListView {
  showSensors(forestries: SensorDto[]): void;
}
