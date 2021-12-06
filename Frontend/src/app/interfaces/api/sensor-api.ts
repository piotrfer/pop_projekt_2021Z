import { SensorDto } from '../../data-types/sensor-dto';
import { Observable } from 'rxjs';

export interface SensorAPI {
  // registerSensor(in sensorDto:SensorDto[1], in token:string[1]);
  save(forestryDto: SensorDto): Observable<SensorDto>;
  getAll(): Observable<SensorDto[]>;
  assignToForestry(forestryId: string, sensorId: string): Observable<void>;
}
