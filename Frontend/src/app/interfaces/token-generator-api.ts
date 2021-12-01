import { Observable } from 'rxjs/Rx';

export interface TokenGeneratorAPI {
  generateToken(): Observable<string>;
}