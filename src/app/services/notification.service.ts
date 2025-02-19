import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  onNewEmergency(): Observable<any> {
    return new Observable<any>((observer) => {
      this.socket.on('newEmergency', (data: any) => {
        observer.next(data);
      });

      return () => {
        this.socket.off('newEmergency');
      };
    });
  }
}
