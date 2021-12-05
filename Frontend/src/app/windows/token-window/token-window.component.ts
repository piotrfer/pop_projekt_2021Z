import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ITokenGeneratorEventHandler } from 'src/app/interfaces/itoken-generator-event-handler';
import { ITokenGeneratorShower } from 'src/app/interfaces/itoken-generator-shower';
import { TokenGeneratorAPI } from 'src/app/interfaces/token-generator-api';
import { TokenGeneratorEventHandler } from 'src/app/presenters/token-presenter/token-generator-event-handler';
import { TokenGeneratorProxy } from 'src/app/proxy/token-generator-proxy';

@Component({
  selector: 'app-token-window',
  templateUrl: './token-window.component.html',
  styleUrls: ['./token-window.component.css']
})
export class TokenWindowComponent implements AfterViewInit {
  @ViewChild('tokenGeneratorShower') 
  private tokenGeneratorShower: ITokenGeneratorShower|undefined;

  tokenGeneratorEventHandler: ITokenGeneratorEventHandler;

  tokenGeneratorProxy: TokenGeneratorAPI;

  constructor(private http: HttpClient) {
    this.tokenGeneratorProxy = new TokenGeneratorProxy(http);
    this.tokenGeneratorEventHandler = new TokenGeneratorEventHandler(this.tokenGeneratorProxy);
  }

  ngAfterViewInit(): void {
    (this.tokenGeneratorEventHandler as TokenGeneratorEventHandler).init(this.tokenGeneratorShower!);
  }
}
