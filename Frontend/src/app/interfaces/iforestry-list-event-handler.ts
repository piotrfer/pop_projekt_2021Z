import { IForestryListView } from "./iforestry-list-view";
import {ForestryDto} from "../data-types/forestry-dto";

export interface IForestryListEventHandler {
    init(forestryList: IForestryListView): void;
    showAllForestriesClicked(): void;
    // showCreateForestryForm(): void;
    //saveForestryClicked(forestry: ForestryDto): void;
}
