import { Component, Input, OnInit } from '@angular/core';
import { ForestryDto } from 'src/app/data-types/forestry-dto';
import { IForestryListView } from 'src/app/interfaces/iforestry-list-view';
import { IForestryListEventHandler } from 'src/app/interfaces/iforestry-list-event-handler';

@Component({
  selector: 'app-forestry-list',
  templateUrl: './forestry-list.component.html',
  styleUrls: ['./forestry-list.component.css'],
})
export class ForestryListComponent implements IForestryListView, OnInit {
  @Input() forestryListEventHandler: IForestryListEventHandler | undefined;
  forestries: ForestryDto[] | undefined;
  displayedColumns: string[] = ['id', 'location', 'name'];

  constructor() {}

  ngOnInit(): void {
    this.onInit();
  }

  onInit(): void {
    this.forestryListEventHandler!.showAllForestriesClicked();
  }

  onShowDialogButtonClick(): void {
    this.forestryListEventHandler!.addForestryClicked();
  }

  showForestries(forestries: ForestryDto[]): void {
    this.forestries = forestries;
  }
}
