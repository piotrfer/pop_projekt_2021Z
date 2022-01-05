import { ForestActionAPI } from 'src/app/interfaces/api/forest-action-api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ForestActionDto } from 'src/app/data-types/forest-action-dto';
import { Observable } from 'rxjs';

export class ForestActionProxy implements ForestActionAPI {
  constructor(private http: HttpClient) {}
  save(forestActionDto: ForestActionDto): Observable<ForestActionDto> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    const body = { ...forestActionDto, forestry_id: forestActionDto.forestry };
    console.log(body);
    console.log('INSIDE POST');
    return this.http.post<ForestActionDto>(
      environment.apiURL + 'forest-action',
      body,
      httpOptions
    );
  }
  getAll(): Observable<ForestActionDto[]> {
    return this.http.get<ForestActionDto[]>(environment.apiURL + 'forest-action')
  }
}
