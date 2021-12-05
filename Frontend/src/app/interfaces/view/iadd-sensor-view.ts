export interface IAddSensorView {
    showCreateSensorForm(): void;
    showSensorCreationSuccessMessage(): void;
    showSensorCreationFailureMessage(error: string): void;
  }
  