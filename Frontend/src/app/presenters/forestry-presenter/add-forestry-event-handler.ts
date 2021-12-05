import { IAddForestryView } from 'src/app/interfaces/view/iadd-forestry-view';
import { IAddForestryEventHandler } from 'src/app/interfaces/event-handler/iadd-forestry-event-handler';
import { ForestryDto } from 'src/app/data-types/forestry-dto';
import { ForestryAPI } from 'src/app/interfaces/api/forestry-api';

export class AddForestryEventHandler implements IAddForestryEventHandler {
  private addForestryDialog: IAddForestryView|undefined;
  private apiProxy: ForestryAPI;

  constructor(private api: ForestryAPI) {
    this.apiProxy = api;
  }

  init(addForestryDialog: IAddForestryView) {
    this.addForestryDialog = addForestryDialog;
  }
  saveForestryClicked(forestry: ForestryDto): void {
    this.apiProxy.save(forestry).subscribe((response) => {
      this.addForestryDialog!.showForestryCreationSuccessMessage();
      console.log(response);
    }, (error => {
      this.addForestryDialog!.showForestryCreationFailureMessage(error.statusText);
    }));

  }
  addForestryInvoked(): void {
    this.addForestryDialog!.showCreateForestryForm()
  }
}
