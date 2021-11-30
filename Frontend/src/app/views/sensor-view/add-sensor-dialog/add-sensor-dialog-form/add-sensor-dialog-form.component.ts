import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-add-sensor-dialog-form',
  templateUrl: './add-sensor-dialog-form.component.html',
  styleUrls: ['./add-sensor-dialog-form.component.css']
})
export class AddSensorDialogFormComponent implements OnInit {
  x = "";
  y = "";
  coordinates: any[] = [];
  selectedSensorType = '';
  sensorTypes: string[] = ['FIRE', 'HUMIDITY'];
  sensorModel = ''



  returnData(){
    const formValues = {
      sensorModel: this.sensorModel,
      sensorType: this.selectedSensorType,
      coordinates: {long: parseFloat(this.x), lat: parseFloat(this.y)}
    }

    return formValues
  }

  // handleAddCoordClick(){
  //   const coord = {x: parseFloat(this.x), y: parseFloat(this.y)};
  //   if(this.coordinates.length < 1) {
  //     this.coordinates.push(coord);
  //   }
  // }


  constructor() {
  }

  ngOnInit(): void {
  }
}
