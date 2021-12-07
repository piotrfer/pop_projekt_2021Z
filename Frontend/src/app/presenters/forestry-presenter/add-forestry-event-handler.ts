import { IAddForestryView } from 'src/app/interfaces/view/iadd-forestry-view';
import { IAddForestryEventHandler } from 'src/app/interfaces/event-handler/iadd-forestry-event-handler';
import { IForestryListEventHandler } from 'src/app/interfaces/event-handler/iforestry-list-event-handler';
import { ForestryDto } from 'src/app/data-types/forestry-dto';
import { ForestryAPI } from 'src/app/interfaces/api/forestry-api';

export class AddForestryEventHandler implements IAddForestryEventHandler {
  private addForestryDialog: IAddForestryView|undefined;
  private forestryListEventHandler: IForestryListEventHandler|undefined;
  private apiProxy: ForestryAPI;

  constructor(private api: ForestryAPI) {
    this.apiProxy = api;
  }

  init(addForestryDialog: IAddForestryView, forestryListEventHandler: IForestryListEventHandler) {
    this.addForestryDialog = addForestryDialog;
    this.forestryListEventHandler = forestryListEventHandler;
  }
  saveForestryClicked(forestry: ForestryDto): void {
    this.apiProxy.save(forestry).subscribe((response) => {
      this.addForestryDialog!.showForestryCreationSuccessMessage();
      this.forestryListEventHandler!.showAllForestriesClicked();
      //window.location.reload();
      console.log(response);
    }, (error => {
      console.log(error.error[0].msg);
      this.addForestryDialog!.showForestryCreationFailureMessage(error.error[0].msg);
    }));

  }
  addForestryInvoked(): void {
    this.addForestryDialog!.showCreateForestryForm()
  }
}
