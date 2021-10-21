import { Injectable } from '@angular/core';
import { ForestryViewComponent } from '../../views/forestry-view/forestry-view.component';

@Injectable()
export class ForestryControllerService {
  forestryView?: ForestryViewComponent;

  constructor() { }

  init(forestryView: ForestryViewComponent) {
    this.forestryView = forestryView;
  }

  async getForestry() {
    // const res = await fetch('api');
    const res = "forestry value";
    this.forestryView!.setForestry(res);
  }
}
