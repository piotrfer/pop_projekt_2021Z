import { ForestActionDto } from '../../data-types/forest-action-dto';
import { Observable } from 'rxjs';

export interface ForestActionAPI {
  save(forestActionDto: ForestActionDto): Observable<ForestActionDto>;
  getAll(): Observable<ForestActionDto[]>;
}
