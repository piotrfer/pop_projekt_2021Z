import { ForestActionDto } from 'src/app/data-types/forest-action-dto';

export interface IAddForestActionEventHandler {
    saveForestActionClicked(forestAction: ForestActionDto): void;
    addForestActionInvoked(): void;
}
