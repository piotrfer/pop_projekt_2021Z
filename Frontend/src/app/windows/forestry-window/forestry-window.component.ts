import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IForestryListView } from 'src/app/interfaces/iforestry-list-view';
import { IForestryListEventHandler } from 'src/app/interfaces/iforestry-list-event-handler';
import { ForestryListEventHandler  } from 'src/app/presenters/forestry-presenter/forestry-list-event-handler';
import { IAddForestryEventHandler } from 'src/app/interfaces/iadd-forestry-event-handler';
import { AddForestryEventHandler } from 'src/app/presenters/forestry-presenter/add-forestry-event-handler';
import { ForestryProxy } from 'src/app/proxy/forestry-proxy';
import { ForestryAPI } from 'src/app/interfaces/forestry-api';

@Component({
  selector: 'app-forestry-window',
  templateUrl: './forestry-window.component.html',
  styleUrls: ['./forestry-window.component.css']
})
export class ForestryWindowComponent implements OnInit, AfterViewInit {
  @ViewChild('forestryView') 
  private forestryView: IForestryListView|undefined;
  forestryPresenter: IForestryListEventHandler;
  addForestryPresenter: IAddForestryEventHandler;
  forestryProxy: ForestryAPI;

  constructor(private http: HttpClient) {
    this.forestryProxy = new ForestryProxy(http);
    this.forestryPresenter = new ForestryListEventHandler(http);
    this.addForestryPresenter = new AddForestryEventHandler(this.forestryProxy);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.forestryPresenter.init(this.forestryView!);
    this.addForestryPresenter.init(this.forestryView!);
  }
}
