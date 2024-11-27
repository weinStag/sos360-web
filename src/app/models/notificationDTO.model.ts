export class NotificationDTO {
  id?: number;
  message: string;
  toUserId: number;
  read: boolean;
  createdAt: string;

  constructor(message: string, toUserId: number, read: boolean, createdAt: string, cardId?: number) {
    this.message = message;
    this.toUserId = toUserId;
    this.read = read;
    this.createdAt = createdAt;
  }
}
