import { ForestryShower } from "./forestry-shower";

export interface ForestryEventHandler {
    init(forestryList: ForestryShower): void;
    showAllForestriesClicked(): void;
}
