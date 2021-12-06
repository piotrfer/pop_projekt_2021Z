import { ForestryDto } from 'src/app/data-types/forestry-dto';

export interface IAssignForestryShower {
    showAvailableForestries(forestries: ForestryDto[]): void;
    showNoForestriesMessage(): void;
    showSuccessMessage(): void;
    showErrorMessage(response: { body: string }): void;
}
