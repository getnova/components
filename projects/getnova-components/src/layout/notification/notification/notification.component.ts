import {Component, HostBinding, Input} from '@angular/core';
import {Notification, NotificationType} from "../notification";

@Component({
  selector: 'nova-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

  @Input()
  public notification?: Notification;

  @HostBinding('class.info')
  get info(): boolean {
    return this.notification ? this.notification.type === NotificationType.INFO : false;
  }

  @HostBinding('class.success')
  get success(): boolean {
    return this.notification ? this.notification.type === NotificationType.SUCCESS : false;
  }

  @HostBinding('class.warning')
  get warning(): boolean {
    return this.notification ? this.notification.type === NotificationType.WARNING : false;
  }

  @HostBinding('class.danger')
  get danger(): boolean {
    return this.notification ? this.notification.type === NotificationType.DANGER : false;
  }
}
