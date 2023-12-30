import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { NotificationService } from '../tab6/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService 
  ) { }

  login(correo: string, contrasena: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { correo, contrasena }).pipe(
      tap(response => {
        localStorage.setItem('userId', response.userId);
        this.notificationService.addWelcomeNotification(); 
      })
    );
  }

  getUserId(): string | null {
    return localStorage.getItem('userId');
  }
}  
