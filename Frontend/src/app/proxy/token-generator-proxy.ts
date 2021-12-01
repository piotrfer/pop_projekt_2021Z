import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/Rx';
import { TokenGeneratorAPI } from '../interfaces/token-generator-api';

export class TokenGeneratorProxy implements TokenGeneratorAPI {
  constructor(private http: HttpClient) {}
  generateToken(): Observable<string> {
    return Observable.of<string>("token_zwrócony_przez_proxy");
    return this.http.get<string>(environment.apiURL + '...');
  }
}
