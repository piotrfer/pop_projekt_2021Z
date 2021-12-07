import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ISensorListView } from 'src/app/interfaces/view/isensor-list-view';
import { ISensorListEventHandler } from 'src/app/interfaces/event-handler/isensor-list-event-handler';
import { SensorListEventHandler  } from 'src/app/presenters/sensor-presenter/sensor-list-event-handler';
import { IAddSensorEventHandler } from 'src/app/interfaces/event-handler/iadd-sensor-event-handler';
import { AddSensorEventHandler } from 'src/app/presenters/sensor-presenter/add-sensor-event-handler';
import { SensorProxy } from 'src/app/proxy/sensor-proxy';
import { SensorAPI } from 'src/app/interfaces/api/sensor-api';
import { IAddSensorView } from 'src/app/interfaces/view/iadd-sensor-view';
import { IAssignForestryShower } from 'src/app/interfaces/view/iassign-forestry-shower';
import { IAssignForestryEventHandler } from 'src/app/interfaces/event-handler/iassign-forestry-event-handler';
import { ForestryAPI } from 'src/app/interfaces/api/forestry-api';
import { ForestryProxy } from 'src/app/proxy/forestry-proxy';
import { AssignForestryEventHandler } from 'src/app/presenters/sensor-presenter/assign-forestry-event-handler';

@Component({
  selector: 'app-sensor-window',
  templateUrl: './sensor-window.component.html',
  styleUrls: ['./sensor-window.component.css']
})
export class SensorWindowComponent implements AfterViewInit {
  @ViewChild('sensorList')
  private sensorList: ISensorListView|undefined;
  @ViewChild('addSensorDialog') 
  private addSensorDialog: IAddSensorView|undefined;
  @ViewChild('assignForestryShower')
  private assignForestryShower: IAssignForestryShower|undefined;

  sensorListEventHandler: ISensorListEventHandler;
  addSensorEventHandler: IAddSensorEventHandler;
  assignForestryEventHandler: IAssignForestryEventHandler;

  sensorProxy: SensorAPI;
  forestryProxy: ForestryAPI;

  constructor(private http: HttpClient) {
    this.sensorProxy = new SensorProxy(http);
    this.forestryProxy = new ForestryProxy(http);
    this.sensorListEventHandler = new SensorListEventHandler(this.sensorProxy);
    this.addSensorEventHandler = new AddSensorEventHandler(this.sensorProxy);
    this.assignForestryEventHandler = new AssignForestryEventHandler(this.sensorProxy, this.forestryProxy);
  }

  ngAfterViewInit(): void {
    this.sensorListEventHandler.init(this.sensorList!, this.addSensorEventHandler!, this.assignForestryEventHandler!);
    this.addSensorEventHandler.init(this.addSensorDialog!);
    (this.assignForestryEventHandler as AssignForestryEventHandler).init(this.assignForestryShower!);
  }
}
