import { Component, Input, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ForestryDto } from 'src/app/data-types/forestry-dto';
import { IForestryListView } from 'src/app/interfaces/iforestry-list-view';
import { IForestryListEventHandler } from 'src/app/interfaces/iforestry-list-event-handler';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-forestry-list',
  templateUrl: './forestry-list.component.html',
  styleUrls: ['./forestry-list.component.css'],
})
export class ForestryListComponent implements IForestryListView, OnInit  {
  @Input() forestryListEventHandler: IForestryListEventHandler | undefined;
  forestries: ForestryDto[] | undefined;

  displayedColumns: string[] = ['id', 'name', 'group', 'surface', 'actions'];
  dataSource?: MatTableDataSource<ForestryDto>;
  @ViewChild('paginator') paginator: MatPaginator|undefined;

  constructor(private changeDetector: ChangeDetectorRef) {}

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
    this.dataSource = new MatTableDataSource<ForestryDto>(this.forestries);
    this.changeDetector.detectChanges();
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
}
