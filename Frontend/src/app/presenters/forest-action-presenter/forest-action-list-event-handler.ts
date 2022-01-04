import { IForestActionListView } from 'src/app/interfaces/view/iforest-action-list-view';
import { IForestActionListEventHandler } from 'src/app/interfaces/event-handler/iforest-action-list-event-handler';
import { ForestActionAPI } from 'src/app/interfaces/api/forest-action-api';
import { IAddForestActionEventHandler } from 'src/app/interfaces/event-handler/iadd-forest-action-event-handler';

export class ForestActionListEventHandler implements IForestActionListEventHandler {
  private forestActionList: IForestActionListView | undefined;
  private addForestActionEventHandler: IAddForestActionEventHandler | undefined;
  private apiProxy: ForestActionAPI;

  constructor(private api: ForestActionAPI) {
    this.apiProxy = api;
  }

  init(
    forestActionList: IForestActionListView,
    addForestActionEventHandler: IAddForestActionEventHandler
  ) {
    this.forestActionList = forestActionList;
    this.addForestActionEventHandler = addForestActionEventHandler;
  }
  
  showForestActionsClicked(): void {
    this.apiProxy.getAll().subscribe((forestActions) => {
      this.forestActionList!.showForestActions(forestActions);
    });
  }

  addForestActionClicked(): void {
    this.addForestActionEventHandler!.addForestActionInvoked();
  }
}
