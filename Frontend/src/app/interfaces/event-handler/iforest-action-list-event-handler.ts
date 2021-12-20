import { IForestActionListView } from '../view/iforest-action-list-view';

export interface IForestActionListEventHandler {
  init(forestActionList: IForestActionListView): void;
  showForestActionsClicked(): void;
}
