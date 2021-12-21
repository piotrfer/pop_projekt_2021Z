import { Component } from '@angular/core';
import { ForestryDto } from 'src/app/data-types/forestry-dto';
import { IAddForestActionView } from 'src/app/interfaces/view/iadd-forest-action-view';

@Component({
  selector: 'app-add-forest-action-dispatcher',
  templateUrl: './add-forest-action-dispatcher.component.html',
  styleUrls: ['./add-forest-action-dispatcher.component.css']
})
export class AddForestActionDispatcher implements IAddForestActionView {

  constructor() { }

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
