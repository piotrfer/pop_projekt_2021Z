import { ForestryShower } from 'src/app/interfaces/forestry-shower';
import { AddForestryEventHandler } from 'src/app/interfaces/add-forestry-event-handler';
import { ForestryDto } from 'src/app/data-types/forestry-dto';
import { ForestryProxy } from 'src/app/proxy/forestry-proxy';

export class AddForestryPresenter implements AddForestryEventHandler {
  private forestryView: ForestryShower | undefined;
  private apiProxy: ForestryProxy | undefined;

  constructor(private api: ForestryProxy) {
    this.apiProxy = api;
  }

  init(forestryView: ForestryShower) {
    this.forestryView = forestryView;
  }
  saveForestryClicked(forestry: ForestryDto): void {
    this.apiProxy!.save(forestry).subscribe((response) => {
      console.log(response);
    });
  }
}
