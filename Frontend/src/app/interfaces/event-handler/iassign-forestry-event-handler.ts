export interface IAssignForestryEventHandler {
    selectForestryClicked(sensorId: string): void;
    forestrySelected(forestryId: string, sensorId: string): void;
}
