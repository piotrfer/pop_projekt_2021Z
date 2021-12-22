import { Component, Input, OnInit } from '@angular/core';
import { ForestryDto } from 'src/app/data-types/forestry-dto';
import { IAddForestActionEventHandler } from 'src/app/interfaces/event-handler/iadd-forest-action-event-handler';

@Component({
  selector: 'app-create-forest-action-form',
  templateUrl: './create-forest-action-form.component.html',
  styleUrls: ['./create-forest-action-form.component.css']
})
export class CreateForestActionForm {
  @Input() addForestActionEventHandler: IAddForestActionEventHandler|undefined;
  @Input() forestries: ForestryDto[]|undefined;
  
  saveForestActionClicked(): void {

  }
}
