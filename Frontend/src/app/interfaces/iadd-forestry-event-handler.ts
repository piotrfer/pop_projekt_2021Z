import { ForestryDto } from '../data-types/forestry-dto';
import { IAddForestryView } from './iadd-forestry-view';

export interface IAddForestryEventHandler {
  init(addForestryDialog: IAddForestryView): void;
  saveForestryClicked(forestry: ForestryDto): void;
  addForestryInvoked(): void;
}
