import {Component, Input} from '@angular/core';

@Component({
  selector: 'nova-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss']
})
export class ModalHeaderComponent {

  @Input()
  public title = 'Loading...';
}
