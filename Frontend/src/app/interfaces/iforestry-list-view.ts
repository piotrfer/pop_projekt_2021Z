import { ForestryDto } from '../data-types/forestry-dto';

export interface IForestryListView {
  showForestries(forestries: ForestryDto[]): void;
  showPositiveDialog(): void;
  showNegativeDialog(error: string): void;

}
