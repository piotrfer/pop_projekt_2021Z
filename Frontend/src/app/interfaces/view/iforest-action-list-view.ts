import { ForestActionDto } from '../../data-types/forest-action-dto';

export interface IForestActionListView {
  showForestActions(forestActions: ForestActionDto[]): void;
}
