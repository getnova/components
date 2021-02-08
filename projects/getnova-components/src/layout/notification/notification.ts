export enum NotificationType {
  INFO,
  SUCCESS,
  WARNING,
  DANGER
}

export interface Notification {
  title: string;
  message: string;
  type?: NotificationType;
  timeToLive: number;
}
