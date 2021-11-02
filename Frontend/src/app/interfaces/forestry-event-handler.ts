import { ForestryShower } from "./forestry-shower";
import {ForestryDto} from "./../data-types/forestry-dto";

export interface ForestryEventHandler {
    init(forestryList: ForestryShower): void;
    showAllForestriesClicked(): void;
    // showCreateForestryForm(): void;
    saveForestryClicked(forestry: ForestryDto): void;
}
