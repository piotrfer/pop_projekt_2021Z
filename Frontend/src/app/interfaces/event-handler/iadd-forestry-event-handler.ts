import { ForestryDto } from '../../data-types/forestry-dto';
import { IAddForestryView } from '../view/iadd-forestry-view';
import { IForestryListEventHandler } from '../event-handler/iforestry-list-event-handler';

export interface IAddForestryEventHandler {
  init(addForestryDialog: IAddForestryView, forestryListEventHandler: IForestryListEventHandler): void;
  saveForestryClicked(forestry: ForestryDto): void;
  addForestryInvoked(): void;
}
