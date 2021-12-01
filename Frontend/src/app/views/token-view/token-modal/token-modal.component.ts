import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-token-modal',
  templateUrl: './token-modal.component.html',
  styleUrls: ['./token-modal.component.css']
})
export class TokenModalComponent implements OnInit {
  @Input() token: string|undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
