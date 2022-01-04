import { IForestActionListView } from '../view/iforest-action-list-view';
import { IAddForestActionEventHandler } from './iadd-forest-action-event-handler';

export interface IForestActionListEventHandler {
  init(forestActionList: IForestActionListView, addForestActionEventHandler: IAddForestActionEventHandler): void;
  showForestActionsClicked(): void;
  addForestActionClicked(): void;
}
