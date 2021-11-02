import { Component, Input, OnInit } from '@angular/core';
import { ForestryDto } from 'src/app/data-types/forestry-dto';
import { ForestryShower } from 'src/app/interfaces/forestry-shower';
import { ForestryEventHandler } from 'src/app/interfaces/forestry-event-handler';

@Component({
  selector: 'app-forestry-view',
  templateUrl: './forestry-view.component.html',
  styleUrls: ['./forestry-view.component.css']
})
export class ForestryViewComponent implements OnInit, ForestryShower {
  @Input() forestryPresenter: ForestryEventHandler|undefined;
  forestries: ForestryDto[]|undefined;
  displayedColumns: string[] = ['id', 'location', 'name'];

  constructor() {}

  ngOnInit(): void {
    this.forestryPresenter!.showAllForestriesClicked();
  }

  onShowDialogButtonClick(): void {
    
  }

  showForestries(forestries: ForestryDto[]): void {
    this.forestries = forestries;
  }
}
