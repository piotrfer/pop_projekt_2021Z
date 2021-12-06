export interface IAssignForestryEventHandler {
    selectForestryClicked(): void;
    forestrySelected(forestryId: string, sensorId: string): void;
}
