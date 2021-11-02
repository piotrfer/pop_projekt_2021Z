import { ForestryDto } from "../data-types/forestry-dto";

export interface IForestryList {
    showForestries(forestries: ForestryDto[]): void;
}
