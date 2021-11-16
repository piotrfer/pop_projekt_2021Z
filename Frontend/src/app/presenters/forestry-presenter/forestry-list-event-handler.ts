import { IForestryListView } from 'src/app/interfaces/iforestry-list-view';
import { IForestryListEventHandler } from 'src/app/interfaces/iforestry-list-event-handler';
import { ForestryAPI } from 'src/app/interfaces/forestry-api';

export class ForestryListEventHandler implements IForestryListEventHandler {
  private forestryList: IForestryListView | undefined;
  private apiProxy: ForestryAPI;

  constructor(private api: ForestryAPI) {
    this.apiProxy = api;
  }

  init(forestryList: IForestryListView) {
    this.forestryList = forestryList;
  }

  showAllForestriesClicked(): void {
    this.apiProxy.getAll().subscribe((forestries) => {
      this.forestryList!.showForestries(forestries);
    });
  }
}
