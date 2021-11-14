import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ForestryShower } from 'src/app/interfaces/forestry-shower';
import { ForestryEventHandler } from 'src/app/interfaces/forestry-event-handler';
import { ForestryPresenter } from 'src/app/presenters/forestry-presenter/forestry-presenter';
import { AddForestryEventHandler } from 'src/app/interfaces/add-forestry-event-handler';
import { AddForestryPresenter } from 'src/app/presenters/forestry-presenter/add-forestry-presenter';
import { ApiProxyImpl } from 'src/app/proxy/api-proxy-impl';

@Component({
  selector: 'app-forestry-window',
  templateUrl: './forestry-window.component.html',
  styleUrls: ['./forestry-window.component.css']
})
export class ForestryWindowComponent implements OnInit, AfterViewInit {
  @ViewChild('forestryView') 
  private forestryView: ForestryShower|undefined;
  forestryPresenter: ForestryEventHandler;
  addForestryPresenter: AddForestryEventHandler;

  constructor(private http: HttpClient) {
    this.forestryPresenter = new ForestryPresenter(http);
    this.addForestryPresenter = new AddForestryPresenter(new ApiProxyImpl(http));
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.forestryPresenter.init(this.forestryView!);
    this.addForestryPresenter.init(this.forestryView!);
  }
}
