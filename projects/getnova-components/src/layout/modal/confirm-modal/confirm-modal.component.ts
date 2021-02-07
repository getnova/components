import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Modal} from "../modal";

@Component({
  selector: 'nova-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent extends Modal {

  @Input()
  title = 'Loading...';

  @Input()
  message = 'Loading...';

  @Output()
  resolve = new EventEmitter<boolean>();
}
