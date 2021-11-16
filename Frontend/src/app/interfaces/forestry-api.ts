import { ForestryDto } from "../data-types/forestry-dto";
import {Observable} from 'rxjs/Rx';

export interface ForestryAPI {
    save(forestryDto: ForestryDto): Observable<ForestryDto>;
    getAll(): Observable<ForestryDto[]>;
}
