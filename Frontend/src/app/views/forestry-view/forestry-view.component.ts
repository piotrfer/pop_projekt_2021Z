import { Component, OnInit } from '@angular/core';
import { ForestryControllerService } from 'src/app/controllers/forestry-controller/forestry-controller.service';

@Component({
  selector: 'app-forestry-view',
  templateUrl: './forestry-view.component.html',
  styleUrls: ['./forestry-view.component.css'],
  providers: [ ForestryControllerService ]
})
export class ForestryViewComponent implements OnInit {
  forestry: any;

  constructor(
    public forestryControllerService: ForestryControllerService
  ) { 
    this.forestryControllerService.init(this);
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.forestryControllerService.getForestry();
  }

  setForestry(value: any): void {
    this.forestry = value;
  }
}
