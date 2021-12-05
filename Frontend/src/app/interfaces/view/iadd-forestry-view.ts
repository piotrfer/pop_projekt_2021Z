export interface IAddForestryView {
  showCreateForestryForm(): void;
  showForestryCreationSuccessMessage(): void;
  showForestryCreationFailureMessage(error: string): void;
}
