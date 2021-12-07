import { Component, Input, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { SensorDto } from 'src/app/data-types/sensor-dto';
import { ISensorListShower } from 'src/app/interfaces/view/isensor-list-shower';
import { ISensorListEventHandler } from 'src/app/interfaces/event-handler/isensor-list-event-handler';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css'],
})
export class SensorListComponent implements ISensorListShower, OnInit  {
  @Input() sensorListEventHandler: ISensorListEventHandler | undefined;
  sensors: SensorDto[] | undefined;

  displayedColumns: string[] = ['id', 'model', 'type', 'forestry'];
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

  onAssignForestryButtonClick(sensorId: string): void {
    this.sensorListEventHandler!.assignForestryClicked(sensorId);
  }
}
