import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IForestActionListView } from 'src/app/interfaces/view/iforest-action-list-view';
import { IForestActionListEventHandler } from 'src/app/interfaces/event-handler/iforest-action-list-event-handler';
import { ForestActionListEventHandler  } from 'src/app/presenters/forest-action-presenter/forest-action-list-event-handler';
import { ForestActionProxy } from 'src/app/proxy/forest-action-proxy';
import { ForestActionAPI } from 'src/app/interfaces/api/forest-action-api';
import { IAddForestActionView } from 'src/app/interfaces/view/iadd-forest-action-view';
import { IAddForestActionEventHandler } from 'src/app/interfaces/event-handler/iadd-forest-action-event-handler';
import { AddForestActionEventHandler } from 'src/app/presenters/forest-action-presenter/add-forest-action-event-handler';
import { ForestryProxy } from 'src/app/proxy/forestry-proxy';
import { ForestryAPI } from 'src/app/interfaces/api/forestry-api';

@Component({
  selector: 'app-forest-action-window',
  templateUrl: './forest-action-window.component.html',
  styleUrls: ['./forest-action-window.component.css']
})
export class ForestActionWindow implements AfterViewInit {
  @ViewChild('forestActionList') 
  private forestActionList: IForestActionListView|undefined;
  @ViewChild('addForestActionDispatcher') 
  private addForestActionDispatcher: IAddForestActionView|undefined;

  forestActionListEventHandler: IForestActionListEventHandler;
  addForestActionEventHandler: IAddForestActionEventHandler;

  forestActionProxy: ForestActionAPI;
  forestryProxy: ForestryAPI;

  constructor(private http: HttpClient) {
    this.forestActionProxy = new ForestActionProxy(http);
    this.forestryProxy = new ForestryProxy(http);
    this.forestActionListEventHandler = new ForestActionListEventHandler(this.forestActionProxy);
    this.addForestActionEventHandler = new AddForestActionEventHandler(this.forestActionProxy, this.forestryProxy)
  }

  ngAfterViewInit(): void {
    this.forestActionListEventHandler.init(this.forestActionList!);
    (this.addForestActionEventHandler as AddForestActionEventHandler).init(this.addForestActionDispatcher!, this.forestActionListEventHandler)
  }
}
