import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IForestryListView } from 'src/app/interfaces/view/iforestry-list-view';
import { IForestryListEventHandler } from 'src/app/interfaces/event-handler/iforestry-list-event-handler';
import { ForestryListEventHandler  } from 'src/app/presenters/forestry-presenter/forestry-list-event-handler';
import { IAddForestryEventHandler } from 'src/app/interfaces/event-handler/iadd-forestry-event-handler';
import { AddForestryEventHandler } from 'src/app/presenters/forestry-presenter/add-forestry-event-handler';
import { ForestryProxy } from 'src/app/proxy/forestry-proxy';
import { ForestryAPI } from 'src/app/interfaces/api/forestry-api';
import { IAddForestryView } from 'src/app/interfaces/view/iadd-forestry-view';

@Component({
  selector: 'app-forestry-window',
  templateUrl: './forestry-window.component.html',
  styleUrls: ['./forestry-window.component.css']
})
export class ForestryWindowComponent implements AfterViewInit {
  @ViewChild('forestryList') 
  private forestryList: IForestryListView|undefined;
  @ViewChild('addForestryDialog') 
  private addForestryDialog: IAddForestryView|undefined;

  forestryListEventHandler: IForestryListEventHandler;
  addForestryEventHandler: IAddForestryEventHandler;

  forestryProxy: ForestryAPI;

  constructor(private http: HttpClient) {
    this.forestryProxy = new ForestryProxy(http);
    this.forestryListEventHandler = new ForestryListEventHandler(this.forestryProxy);
    this.addForestryEventHandler = new AddForestryEventHandler(this.forestryProxy);
  }

  ngAfterViewInit(): void {
    this.forestryListEventHandler.init(this.forestryList!, this.addForestryEventHandler!);
    this.addForestryEventHandler.init(this.addForestryDialog!, this.forestryListEventHandler!);
  }
}
