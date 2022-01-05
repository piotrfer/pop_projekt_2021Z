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
  type: string|undefined;
  subtype: string|undefined;
  lat = "";
  long = "";
  coordinates: any[] = [];
  forestry: string|undefined;
  dateStart: any;
  dateEnd: any;
  
  
  saveForestActionClicked(): void {
    this.addForestActionEventHandler!.saveForestActionClicked({
      forestry: this.forestry,
      type: this.type,
      subtype: this.type === 'DEFORESTRATION' ? this.subtype : undefined,
      location: this.coordinates,
      begin: this.dateStart,
      end: this.dateEnd
    })
  }

  handleAddCoordClick(){
    const coord = {lat: parseFloat(this.lat), long: parseFloat(this.long)};
    this.coordinates.push(coord);
  }
}
