import { IAddForestryEventHandler } from './iadd-forestry-event-handler';
import { IForestryListView } from './iforestry-list-view';

export interface IForestryListEventHandler {
  init(forestryList: IForestryListView, addForestryEventHandler: IAddForestryEventHandler): void;
  showAllForestriesClicked(): void;
  addForestryClicked(): void;
}
