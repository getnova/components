import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'nova-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input()
  public type?: 'success' | 'warning' | 'danger';

  @HostBinding('class.success')
  get success(): boolean {
    return this.type === 'success';
  }

  @HostBinding('class.warning')
  get warning(): boolean {
    return this.type === 'warning';
  }

  @HostBinding('class.danger')
  get danger(): boolean {
    return this.type === 'danger';
  }
}
