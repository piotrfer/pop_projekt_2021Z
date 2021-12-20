import { Component, Input, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ForestActionDto } from 'src/app/data-types/forest-action-dto';
import { IForestActionListView } from 'src/app/interfaces/view/iforest-action-list-view';
import { IForestActionListEventHandler } from 'src/app/interfaces/event-handler/iforest-action-list-event-handler';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-forest-action-list',
  templateUrl: './forest-action-list.component.html',
  styleUrls: ['./forest-action-list.component.css'],
})
export class ForestActionListComponent implements IForestActionListView, OnInit  {
  @Input() forestActionListEventHandler: IForestActionListEventHandler | undefined;
  forestActions: ForestActionDto[] | undefined;

  displayedColumns: string[] = ['id', 'forestry', 'type', 'subtype', 'coordinates', 'actions'];
  dataSource?: MatTableDataSource<ForestActionDto>;
  @ViewChild('paginator') paginator: MatPaginator|undefined;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.onInit();
  }

  onInit(): void {
    this.forestActionListEventHandler!.showForestActionsClicked();
  }

  onShowDialogButtonClick(): void {
  }

  showForestActions(forestActions: ForestActionDto[]): void {
    this.forestActions = forestActions;
    this.dataSource = new MatTableDataSource<ForestActionDto>(this.forestActions);
    this.changeDetector.detectChanges();
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
}
