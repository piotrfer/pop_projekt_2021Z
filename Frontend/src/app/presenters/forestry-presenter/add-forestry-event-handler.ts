import { IAddForestryView } from 'src/app/interfaces/iadd-forestry-view';
import { IAddForestryEventHandler } from 'src/app/interfaces/iadd-forestry-event-handler';
import { ForestryDto } from 'src/app/data-types/forestry-dto';
import { ForestryAPI } from 'src/app/interfaces/forestry-api';

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
      console.log(response);
    });
  }
  addForestryInvoked(): void {
    this.addForestryDialog!.showCreateForestryForm()
  }
}
