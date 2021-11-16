import { IForestryListView } from 'src/app/interfaces/iforestry-list-view';
import { IAddForestryEventHandler } from 'src/app/interfaces/iadd-forestry-event-handler';
import { ForestryDto } from 'src/app/data-types/forestry-dto';
import { ForestryAPI } from 'src/app/interfaces/forestry-api';

export class AddForestryEventHandler implements IAddForestryEventHandler {
  private forestryView: IForestryListView | undefined;
  private apiProxy: ForestryAPI;

  constructor(private api: ForestryAPI) {
    this.apiProxy = api;
  }

  init(forestryView: IForestryListView) {
    this.forestryView = forestryView;
  }
  saveForestryClicked(forestry: ForestryDto): void {
    this.apiProxy.save(forestry).subscribe((response) => {
      console.log(response);
    });
  }
}
