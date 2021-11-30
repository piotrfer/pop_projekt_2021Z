import { SensorDto } from '../data-types/sensor-dto';
import { Observable } from 'rxjs/Rx';

export interface SensorAPI {
  save(forestryDto: SensorDto): Observable<SensorDto>;
  getAll(): Observable<SensorDto[]>;
}
