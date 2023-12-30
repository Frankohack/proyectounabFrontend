import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient, private authService: AuthService) { }

  getDoctors(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/doctors`);
  }

  createReservation(doctorId: string, date: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/reservations`, { doctorId, date });
  }

  getAvailablePets(): Observable<any> {
    const userId = this.authService.getUserId();
    return this.http.get<any>(`${this.apiUrl}/usuarios/${userId}/mascotas`);
  }  
}
