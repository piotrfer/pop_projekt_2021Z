import { ForestActionDto } from 'src/app/data-types/forest-action-dto';
import { ForestActionAPI } from 'src/app/interfaces/api/forest-action-api';
import { ForestryAPI } from 'src/app/interfaces/api/forestry-api';
import { IAddForestActionEventHandler } from 'src/app/interfaces/event-handler/iadd-forest-action-event-handler';
import { IForestActionListEventHandler } from 'src/app/interfaces/event-handler/iforest-action-list-event-handler';
import { IAddForestActionView } from 'src/app/interfaces/view/iadd-forest-action-view';

export class AddForestActionEventHandler implements IAddForestActionEventHandler {
  private addForestActionView: IAddForestActionView | undefined;
  private forestActionListEventHandler: IForestActionListEventHandler | undefined;
  private forestActionAPI: ForestActionAPI;
  private forestryAPI: ForestryAPI;

  constructor(forestActionAPI: ForestActionAPI, forestryAPI: ForestryAPI) {
    this.forestActionAPI = forestActionAPI;
    this.forestryAPI = forestryAPI;
  }

  init(
    addForestActionView: IAddForestActionView,
    forestActionListEventHandler: IForestActionListEventHandler
  ) {
    this.addForestActionView = addForestActionView;
    this.forestActionListEventHandler = forestActionListEventHandler;
  }

  saveForestActionClicked(forestAction: ForestActionDto): void {
    this.addForestActionView!.showSpinner();
    this.forestActionAPI!.save(forestAction).subscribe(() => {
      this.addForestActionView!.hideSpinner();
      this.addForestActionView!.showForestActionCreationSuccessMessage();
      this.forestActionListEventHandler!.showForestActionsClicked();
    }, (error => {
      this.addForestActionView!.hideSpinner();
      console.log(error.error[0].msg);
      this.addForestActionView!.showForestActionCreationFailureMessage(error.error[0].msg);
    }));
  }
  addForestActionInvoked(): void {
    this.addForestActionView!.showSpinner();
    this.forestryAPI.getAll().subscribe((forestries) => {
      this.addForestActionView!.hideSpinner();
      this.addForestActionView!.showCreateForestActionForm(forestries)
    });
  }
}
