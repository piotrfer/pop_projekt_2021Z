import { ForestryAPI } from 'src/app/interfaces/forestry-api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ForestryDto } from 'src/app/data-types/forestry-dto';
import { Observable } from 'rxjs/Rx';

export class ForestryProxy implements ForestryAPI {
  constructor(private http: HttpClient) {}
  save(forestryDto: ForestryDto): Observable<ForestryDto> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    const body = forestryDto;
    console.log(body);
    console.log('INSIDE POST');
    return this.http.post<ForestryDto>(
      environment.apiURL + 'forestry',
      body,
      httpOptions
    );
  }
  getAll(): Promise<ForestryDto[]> {
    throw new Error('Method not implemented.');
  }
}
