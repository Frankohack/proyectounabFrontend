import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private _notifications = new BehaviorSubject<string[]>([]);

  get notifications(): Observable<string[]> {
    return this._notifications.asObservable();
  }

  addNotification(message: string): void {
    this._notifications.next([...this._notifications.value, message]);
  }
}
