import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-positive-dialog',
  templateUrl: './positive-dialog.component.html',
  styleUrls: ['./positive-dialog.component.css']
})
export class PositiveDialogComponent implements OnInit {

  @Input() message: any;

  constructor() { }

  ngOnInit(): void {
  }

}
