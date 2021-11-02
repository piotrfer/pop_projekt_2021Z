import { ForestryDto } from "../data-types/forestry-dto";

export interface IForestryShower {
    showForestries(forestries: ForestryDto[]): void;
}
