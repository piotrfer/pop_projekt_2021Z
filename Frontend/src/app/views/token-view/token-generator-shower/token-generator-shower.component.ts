import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ITokenGeneratorEventHandler } from 'src/app/interfaces/event-handler/itoken-generator-event-handler';
import { ITokenGeneratorShower } from 'src/app/interfaces/view/itoken-generator-shower';
import { TokenModalComponent } from '../token-modal/token-modal.component';

@Component({
  selector: 'app-token-generator-shower',
  templateUrl: './token-generator-shower.component.html',
  styleUrls: ['./token-generator-shower.component.css']
})
export class TokenGeneratorShowerComponent implements OnInit, ITokenGeneratorShower {
  @Input() tokenGeneratorEventHandler: ITokenGeneratorEventHandler|undefined;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showTokenModal(token: string): void {
    const dialogRef = this.dialog.open(TokenModalComponent);
    dialogRef.componentInstance.token = token;
  }
}
