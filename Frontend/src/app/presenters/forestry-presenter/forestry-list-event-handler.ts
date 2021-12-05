import { IForestryListView } from 'src/app/interfaces/view/iforestry-list-view';
import { IForestryListEventHandler } from 'src/app/interfaces/event-handler/iforestry-list-event-handler';
import { ForestryAPI } from 'src/app/interfaces/api/forestry-api';
import { IAddForestryEventHandler } from 'src/app/interfaces/event-handler/iadd-forestry-event-handler';

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
