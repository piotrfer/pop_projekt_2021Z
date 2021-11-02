import { Component, Input, OnInit } from '@angular/core';
import { ForestryDto } from 'src/app/data-types/forestry-dto';
import { IForestryList } from 'src/app/interfaces/iforestry-list';
import { IForestryPresenter } from 'src/app/interfaces/iforestry-presenter';

@Component({
  selector: 'app-forestry-list',
  templateUrl: './forestry-list.component.html',
  styleUrls: ['./forestry-list.component.css']
})
export class ForestryListComponent implements OnInit, IForestryList {
  @Input() forestryPresenter: IForestryPresenter|undefined;
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
