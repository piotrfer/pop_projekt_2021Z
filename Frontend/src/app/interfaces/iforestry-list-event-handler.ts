import { IForestryListView } from "./iforestry-list-view";

export interface IForestryListEventHandler {
    init(forestryList: IForestryListView): void;
    showAllForestriesClicked(): void;
}
