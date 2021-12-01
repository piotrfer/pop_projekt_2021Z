import { Component, Input, OnInit } from '@angular/core';
import { ITokenGeneratorEventHandler } from 'src/app/interfaces/itoken-generator-event-handler';

@Component({
  selector: 'app-generate-button-container',
  templateUrl: './generate-button-container.component.html',
  styleUrls: ['./generate-button-container.component.css']
})
export class GenerateButtonContainerComponent implements OnInit {
  @Input() tokenGeneratorEventHandler: ITokenGeneratorEventHandler|undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onGenerateTokenButtonClick() {
    this.tokenGeneratorEventHandler!.generateTokenClicked();
  }

}
