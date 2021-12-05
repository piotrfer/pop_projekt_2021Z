import { Observable } from 'rxjs';

export interface TokenGeneratorAPI {
  generateToken(): Observable<string>;
}