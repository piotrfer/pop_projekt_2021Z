import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forest-action-creation-failure-message',
  templateUrl: './forest-action-creation-failure-message.component.html',
  styleUrls: ['./forest-action-creation-failure-message.component.css']
})
export class ForestActionCreationFailureMessage {
  @Input() response: Response|undefined;
}
