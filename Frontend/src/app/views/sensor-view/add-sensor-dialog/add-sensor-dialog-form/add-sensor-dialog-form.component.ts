import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-add-sensor-dialog-form',
  templateUrl: './add-sensor-dialog-form.component.html',
  styleUrls: ['./add-sensor-dialog-form.component.css']
})
export class AddSensorDialogFormComponent implements OnInit {
  sensorName = '';
  sensorSurface = 0;
  afforestationTypes: string[] = ['Liściaste', 'Iglaste'];
  afforestation = new FormControl();
  foresterLodges: string[] = ['Leśniczówka 1', 'Leśniczówka 2', 'Leśniczówka 3'];
  selectedForesterLodge = '';
  sensorBorders: string[] = ['Granica 1', 'Granica 2', 'Granica 3'];
  selectedSensorBorder = '';

  x = "";
  y = "";
  coordinates: any[] = [];



  returnData(){
    const formValues = {
      sensorName: this.sensorName,
      sensorBorder: this.selectedSensorBorder,
      sensorSurface: this.sensorSurface,
      afforestationTypes: this.afforestation.value,
      coordinates: this.coordinates
    }

    return formValues
  }

  handleAddCoordClick(){
    const coord = {x: parseFloat(this.x), y: parseFloat(this.y)};
    this.coordinates.push(coord);
  }


  constructor() {   
  }

  ngOnInit(): void {
  }
}
