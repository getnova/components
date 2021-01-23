import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'nova-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input()
  @HostBinding('className')
  public type?: 'warning' | 'danger';
}
