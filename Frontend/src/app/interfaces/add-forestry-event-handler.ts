import { ForestryShower } from './forestry-shower';
import { ForestryDto } from './../data-types/forestry-dto';

export interface AddForestryEventHandler {
  init(forestryList: ForestryShower): void;
  saveForestryClicked(forestry: ForestryDto): void;
}
