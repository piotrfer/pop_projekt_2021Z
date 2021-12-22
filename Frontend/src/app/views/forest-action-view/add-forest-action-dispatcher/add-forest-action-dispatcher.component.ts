import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ForestryDto } from 'src/app/data-types/forestry-dto';
import { IAddForestActionEventHandler } from 'src/app/interfaces/event-handler/iadd-forest-action-event-handler';
import { IAddForestActionView } from 'src/app/interfaces/view/iadd-forest-action-view';

@Component({
  selector: 'app-add-forest-action-dispatcher',
  templateUrl: './add-forest-action-dispatcher.component.html',
  styleUrls: ['./add-forest-action-dispatcher.component.css']
})
export class AddForestActionDispatcher implements IAddForestActionView {
  @Input() addForestActionEventHandler: IAddForestActionEventHandler|undefined; 

  constructor(public dialog: MatDialog) { }

  showCreateForestActionForm(forestries: ForestryDto[]): void {
    
  }
  showForestActionCreationSuccessMessage(): void {
    
  }
  showForestActionCreationFailureMessage(response: Response): void {
    
  }
  showNoForestriesMessage(): void {
    
  }
  showSpinner(): void {
    
  }
}
