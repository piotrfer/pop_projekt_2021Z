import { IForestryListView } from 'src/app/interfaces/iforestry-list-view';
import { IAddForestryEventHandler } from 'src/app/interfaces/iadd-forestry-event-handler';
import { ForestryDto } from 'src/app/data-types/forestry-dto';
import { ForestryAPI } from 'src/app/interfaces/forestry-api';

export class AddForestryEventHandler implements IAddForestryEventHandler {
  private forestryList: IForestryListView | undefined;
  private apiProxy: ForestryAPI;

  constructor(private api: ForestryAPI) {
    this.apiProxy = api;
  }

  init(forestryList: IForestryListView) {
    this.forestryList = forestryList;
  }
  saveForestryClicked(forestry: ForestryDto): void {
    this.apiProxy.save(forestry).subscribe((response) => {
      this.forestryList?.showPositiveDialog();
      console.log(response);
    }, (error => {
      this.forestryList?.showNegativeDialog(error.statusText);
    }));

  }
}
