import { ForestryDto } from "../data-types/forestry-dto";

export interface ForestryShower {
    showForestries(forestries: ForestryDto[]): void;
    
}
