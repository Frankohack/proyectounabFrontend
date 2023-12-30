import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications = new BehaviorSubject<string[]>([]);

  addWelcomeNotification() {
    const currentNotifications = this.notifications.value;
    const newNotification = 'Bienvenido al sistema FmPets...';
    this.notifications.next([...currentNotifications, newNotification]);
  }

  getNotificationCount(): Observable<number> {
    return this.notifications.asObservable().pipe(
      map(notificationsArray => notificationsArray.length)
    );
  }
  resetNotificationCount() {
    this.notifications.next([]);
  }
}


