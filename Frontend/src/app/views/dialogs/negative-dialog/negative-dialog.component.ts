import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-negative-dialog',
  templateUrl: './negative-dialog.component.html',
  styleUrls: ['./negative-dialog.component.css']
})
export class NegativeDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {error: string}) { }

  ngOnInit(): void {
  }

}
