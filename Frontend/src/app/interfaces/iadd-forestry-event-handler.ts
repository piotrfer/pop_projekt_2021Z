import { IForestryListView } from './iforestry-list-view';
import { ForestryDto } from '../data-types/forestry-dto';

export interface IAddForestryEventHandler {
  init(forestryList: IForestryListView): void;
  saveForestryClicked(forestry: ForestryDto): void;
}
