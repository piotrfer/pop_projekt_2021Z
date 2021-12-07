import { SensorDto } from '../../data-types/sensor-dto';

export interface ISensorListShower {
  showSensors(forestries: SensorDto[]): void;
}
