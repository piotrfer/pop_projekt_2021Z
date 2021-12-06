import { IAssignForestryShower } from 'src/app/interfaces/view/iassign-forestry-shower';
import { IAssignForestryEventHandler } from 'src/app/interfaces/event-handler/iassign-forestry-event-handler';
import { SensorAPI } from 'src/app/interfaces/api/sensor-api';
import { ForestryAPI } from 'src/app/interfaces/api/forestry-api';

export class AssignForestryEventHandler implements IAssignForestryEventHandler {
  private assignForestryShower: IAssignForestryShower | undefined;
  private sensorProxy: SensorAPI;
  private forestryProxy: ForestryAPI;

  constructor(sensorAPI: SensorAPI, forestryAPI: ForestryAPI) {
    this.sensorProxy = sensorAPI;
    this.forestryProxy = forestryAPI;
  }

  init(assignForestryShower: IAssignForestryShower) {
    this.assignForestryShower = assignForestryShower;
  }

  selectForestryClicked(): void {
    this.forestryProxy.getAll().subscribe((forestries) => {
      if (forestries.length === 0) {
        this.assignForestryShower!.showNoForestriesMessage();
      } else {
        this.assignForestryShower!.showAvailableForestries(forestries);
      }
    });
  }

  forestrySelected(forestryId: string, sensorId: string): void {
    this.sensorProxy.assignToForestry(forestryId, sensorId).subscribe(
      () => {
        this.assignForestryShower!.showSuccessMessage();
      },
      (error: any) => {
        this.assignForestryShower!.showErrorMessage({ body: 'TODO' });
      }
    );
  }
}
