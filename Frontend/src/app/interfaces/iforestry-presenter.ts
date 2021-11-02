import { IForestryShower } from "./iforestry-shower";

export interface IForestryPresenter {
    init(forestryList: IForestryShower): void;
    showAllForestriesClicked(): void;
}
