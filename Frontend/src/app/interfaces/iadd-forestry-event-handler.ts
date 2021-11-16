import { ForestryShower } from './forestry-shower';
import { ForestryDto } from '../data-types/forestry-dto';

export interface IAddForestryEventHandler {
  init(forestryList: ForestryShower): void;
  saveForestryClicked(forestry: ForestryDto): void;
}
