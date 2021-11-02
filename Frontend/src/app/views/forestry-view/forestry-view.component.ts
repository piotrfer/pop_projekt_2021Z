import { Component, Input, OnInit } from '@angular/core';
import { ForestryDto } from 'src/app/data-types/forestry-dto';
import { ForestryShower } from 'src/app/interfaces/forestry-shower';
import { IForestryPresenter } from 'src/app/interfaces/iforestry-presenter';

@Component({
  selector: 'app-forestry-view',
  templateUrl: './forestry-view.component.html',
  styleUrls: ['./forestry-view.component.css']
})
export class ForestryViewComponent implements OnInit, ForestryShower {
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
