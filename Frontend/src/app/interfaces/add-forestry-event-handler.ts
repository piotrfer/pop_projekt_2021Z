import { ForestryShower } from "./forestry-shower";
import {ForestryDto} from "./../data-types/forestry-dto";
import {ApiProxy} from 'src/app/proxy/api-proxy';

export interface AddForestryEventHandler {
    init(forestryList: ForestryShower): void;
    saveForestryClicked(forestry: ForestryDto): void;
}
