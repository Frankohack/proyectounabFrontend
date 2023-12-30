import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUserReservations(userId: string): Observable<any[]> {
    const url = `${this.apiUrl}/reservations-doctor-details?userId=${userId}`;
    console.log('URL de la solicitud:', url);
    return this.http.get<any[]>(url);
  }
}

