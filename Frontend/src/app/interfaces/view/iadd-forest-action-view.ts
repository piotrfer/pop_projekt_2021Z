import { ForestryDto } from "src/app/data-types/forestry-dto";

export interface IAddForestActionView {
    showCreateForestActionForm(forestries: ForestryDto[]): void;
    showForestActionCreationSuccessMessage(): void;
    showForestActionCreationFailureMessage(response: Response): void;
    showNoForestriesMessage(): void;
    showSpinner(): void;
}
