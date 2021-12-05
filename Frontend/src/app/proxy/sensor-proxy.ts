import { SensorAPI } from 'src/app/interfaces/api/sensor-api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SensorDto } from 'src/app/data-types/sensor-dto';
import { Observable } from 'rxjs';

export class SensorProxy implements SensorAPI {
  constructor(private http: HttpClient) {}
  save(sensorDto: SensorDto): Observable<SensorDto> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    const body = sensorDto;
    console.log(body);
    console.log('INSIDE POST');
    return this.http.post<SensorDto>(
      environment.apiURL + 'sensor',
      body,
      httpOptions
    );
  }
  getAll(): Observable<SensorDto[]> {
    return this.http.get<SensorDto[]>(environment.apiURL + 'sensor')
  }
}
