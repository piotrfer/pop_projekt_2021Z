import { ForestryShower } from 'src/app/interfaces/forestry-shower';
import { IAddForestryEventHandler } from 'src/app/interfaces/iadd-forestry-event-handler';
import { ForestryDto } from 'src/app/data-types/forestry-dto';
import { ForestryAPI } from 'src/app/interfaces/forestry-api';

export class AddForestryEventHandler implements IAddForestryEventHandler {
  private forestryView: ForestryShower | undefined;
  private apiProxy: ForestryAPI | undefined;

  constructor(private api: ForestryAPI) {
    this.apiProxy = api;
  }

  init(forestryView: ForestryShower) {
    this.forestryView = forestryView;
  }
  saveForestryClicked(forestry: ForestryDto): void {
    this.apiProxy!.save(forestry).subscribe((response) => {
      console.log(response);
    });
  }
}
