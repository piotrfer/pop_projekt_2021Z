import { Component, Input, OnInit } from '@angular/core';
import { ForestryDto } from 'src/app/data-types/forestry-dto';
import { IForestryShower } from 'src/app/interfaces/iforestry-shower';
import { IForestryPresenter } from 'src/app/interfaces/iforestry-presenter';

@Component({
  selector: 'app-forestry-view',
  templateUrl: './forestry-view.component.html',
  styleUrls: ['./forestry-view.component.css']
})
export class ForestryViewComponent implements OnInit, IForestryShower {
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
