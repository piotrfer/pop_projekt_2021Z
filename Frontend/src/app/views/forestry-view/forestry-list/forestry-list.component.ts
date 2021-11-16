import { Component, Input, OnInit } from '@angular/core';
import { ForestryDto } from 'src/app/data-types/forestry-dto';
import { IForestryListView } from 'src/app/interfaces/iforestry-list-view';
import { IForestryListEventHandler } from 'src/app/interfaces/iforestry-list-event-handler';
import { IAddForestryEventHandler } from 'src/app/interfaces/iadd-forestry-event-handler';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { AddForestryDialogComponent } from '../add-forestry-dialog/add-forestry-dialog.component';

@Component({
  selector: 'app-forestry-list',
  templateUrl: './forestry-list.component.html',
  styleUrls: ['./forestry-list.component.css'],
})
export class ForestryListComponent implements IForestryListView, OnInit {
  @Input() forestryListEventHandler: IForestryListEventHandler | undefined;
  @Input() addForestryEventHandler: IAddForestryEventHandler | undefined;
  forestries: ForestryDto[] | undefined;
  displayedColumns: string[] = ['id', 'location', 'name'];

  constructor(public dialog: MatDialog, public http: HttpClient) {}

  ngOnInit(): void {
    this.onInit();
  }

  onInit(): void {
    this.forestryListEventHandler!.showAllForestriesClicked();
  }

  onShowDialogButtonClick(): void {
    const dialogConfig = {
      width: '600px',
      data: { data1: 'value1', data2: 'value2' },
    };
    const dialogRef = this.dialog.open(
      AddForestryDialogComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      // todo
      // create forestry from received data (with controller)
      const forestry = {
        //id: "cef0cbf3-6458-4f13-a418-ee4d7e7505dd", // it should be new valid uuid
        //location: [{"x": 1.0, "y": 1.2}, {"x": 1.0, "y": 1.2}, {"x": 1.0, "y": 1.2}],  // it should be forestry location
        location: result.coordinates,
        name: result.forestryName,
      };
      this.addForestryEventHandler!.saveForestryClicked(forestry);
    });
  }

  showForestries(forestries: ForestryDto[]): void {
    this.forestries = forestries;
  }
}
