import { Component, OnInit } from '@angular/core';
import { ForestryController } from 'src/app/controllers/forestry-controller/forestry-controller';

@Component({
  selector: 'app-forestry-view',
  templateUrl: './forestry-view.component.html',
  styleUrls: ['./forestry-view.component.css']
})
export class ForestryViewComponent implements OnInit {
  forestryController: ForestryController;
  forestry: any;

  constructor() { 
    this.forestryController = new ForestryController(this);
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.forestryController.getForestry();
  }

  setForestry(value: any): void {
    this.forestry = value;
  }
}
