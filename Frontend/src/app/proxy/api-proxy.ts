import { ForestryDto } from "../data-types/forestry-dto";
import {Observable} from 'rxjs/Rx';

export interface ApiProxy {
    getForestries(): Promise<ForestryDto[]>;
    postForestry(forestry: ForestryDto):  Observable<ForestryDto>;

    
}
