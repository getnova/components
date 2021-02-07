import {Component} from '@angular/core';
import {NotificationService} from "../notification.service";
import {Notification} from "../notification";
import {slideRight} from "../../../animations";

@Component({
  selector: 'nova-notification-parent',
  templateUrl: './notification-parent.component.html',
  styleUrls: ['./notification-parent.component.scss'],
  animations: [slideRight]
})
export class NotificationParentComponent {

  constructor(
    private readonly notificationService: NotificationService
  ) {
  }

  get notifications(): Notification[] {
    return this.notificationService.notifications;
  }
}
