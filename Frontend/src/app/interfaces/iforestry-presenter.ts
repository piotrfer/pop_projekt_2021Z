import { ForestryShower } from "./forestry-shower";

export interface IForestryPresenter {
    init(forestryList: ForestryShower): void;
    showAllForestriesClicked(): void;
}
