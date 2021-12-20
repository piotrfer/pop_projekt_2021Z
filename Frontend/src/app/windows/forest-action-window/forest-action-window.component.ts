import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IForestActionListView } from 'src/app/interfaces/view/iforest-action-list-view';
import { IForestActionListEventHandler } from 'src/app/interfaces/event-handler/iforest-action-list-event-handler';
import { ForestActionListEventHandler  } from 'src/app/presenters/forest-action-presenter/forest-action-list-event-handler';
import { ForestActionProxy } from 'src/app/proxy/forest-action-proxy';
import { ForestActionAPI } from 'src/app/interfaces/api/forest-action-api';

@Component({
  selector: 'app-forest-action-window',
  templateUrl: './forest-action-window.component.html',
  styleUrls: ['./forest-action-window.component.css']
})
export class ForestActionWindowComponent implements AfterViewInit {
  @ViewChild('forestryList') 
  private forestActionList: IForestActionListView|undefined;

  forestActionListEventHandler: IForestActionListEventHandler;

  forestActionProxy: ForestActionAPI;

  constructor(private http: HttpClient) {
    this.forestActionProxy = new ForestActionProxy(http);
    this.forestActionListEventHandler = new ForestActionListEventHandler(this.forestActionProxy);
  }

  ngAfterViewInit(): void {
    this.forestActionListEventHandler.init(this.forestActionList!);
  }
}
