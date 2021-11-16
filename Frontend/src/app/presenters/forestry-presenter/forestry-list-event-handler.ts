import { IForestryListView } from 'src/app/interfaces/iforestry-list-view';
import { IForestryListEventHandler } from 'src/app/interfaces/iforestry-list-event-handler';
import { ForestryAPI } from 'src/app/interfaces/forestry-api';
import { IAddForestryEventHandler } from 'src/app/interfaces/iadd-forestry-event-handler';

export class ForestryListEventHandler implements IForestryListEventHandler {
  private forestryList: IForestryListView | undefined;
  private addForestryEventHandler: IAddForestryEventHandler | undefined;
  private apiProxy: ForestryAPI;

  constructor(private api: ForestryAPI) {
    this.apiProxy = api;
  }

  init(forestryList: IForestryListView, addForestryEventHandler: IAddForestryEventHandler) {
    this.forestryList = forestryList;
    this.addForestryEventHandler = addForestryEventHandler;
  }

  showAllForestriesClicked(): void {
    this.apiProxy.getAll().subscribe((forestries) => {
      this.forestryList!.showForestries(forestries);
    });
  }

  addForestryClicked(): void {
    this.addForestryEventHandler!.addForestryInvoked();
  }
}
