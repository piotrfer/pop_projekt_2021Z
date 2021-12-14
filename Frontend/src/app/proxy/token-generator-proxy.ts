import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenGeneratorAPI } from '../interfaces/api/token-generator-api';

export class TokenGeneratorProxy implements TokenGeneratorAPI {
  constructor(private http: HttpClient) {}
  generateToken(): Observable<string> {
    return this.http
      .get(environment.apiURL + 'token', {responseType: 'text'})
  }
}
