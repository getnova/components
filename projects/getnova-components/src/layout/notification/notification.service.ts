import {Injectable} from '@angular/core';
import {Notification, NotificationType} from "./notification";
import {interval, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notifications0: Notification[] = [];
  private interval?: Subscription | null;

  get notifications(): Notification[] {
    return this.notifications0;
  }

  private static checkNotification(notification: Notification): boolean {
    notification.timeToLive--;
    return notification.timeToLive >= 0;
  }

  public show(title: string, message: string, type?: NotificationType): void {
    this.notifications0.push({title, message, type, timeToLive: 10})

    if (!this.interval) {
      this.createIntervall();
    }
  }

  private createIntervall(): void {
    this.interval = interval(1000)
      .subscribe(() => {
        this.notifications0 = this.notifications0.filter(NotificationService.checkNotification)
        if (this.notifications0.length == 0) {
          this.interval?.unsubscribe();
          this.interval = null;
        }
      });
  }
}
