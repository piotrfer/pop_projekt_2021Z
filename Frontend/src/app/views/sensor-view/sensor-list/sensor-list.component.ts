import { Component, Input, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { SensorDto } from 'src/app/data-types/sensor-dto';
import { ISensorListView } from 'src/app/interfaces/isensor-list-view';
import { ISensorListEventHandler } from 'src/app/interfaces/isensor-list-event-handler';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css'],
})
export class SensorListComponent implements ISensorListView, OnInit  {
  @Input() sensorListEventHandler: ISensorListEventHandler | undefined;
  sensors: SensorDto[] | undefined;

  displayedColumns: string[] = ['id', 'name', 'group', 'surface', 'actions'];
  dataSource?: MatTableDataSource<SensorDto>;
  @ViewChild('paginator') paginator: MatPaginator|undefined;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.onInit();
  }

  onInit(): void {
    this.sensorListEventHandler!.showAllSensorsClicked();
  }

  onShowDialogButtonClick(): void {
    this.sensorListEventHandler!.addSensorClicked();
  }

  showSensors(sensors: SensorDto[]): void {
    this.sensors = sensors;
    this.dataSource = new MatTableDataSource<SensorDto>(this.sensors);
    this.changeDetector.detectChanges();
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
}
