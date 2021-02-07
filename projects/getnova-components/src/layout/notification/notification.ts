export enum NotificationType {
  INFO,
  WARNING,
  DANGER
}

export interface Notification {
  title: string;
  message: string;
  type?: NotificationType;
  timeToLive: number;
}
