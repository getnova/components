import {Component, Input} from '@angular/core';
import {Modal} from "../../modal";

@Component({
  selector: 'nova-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent extends Modal {

  @Input()
  title = 'Loading...';

  @Input()
  message = 'Loading...';
}
