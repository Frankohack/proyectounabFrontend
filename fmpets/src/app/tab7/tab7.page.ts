import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  getUserReservations(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/reservations?userId=${userId}`);
  }
}

@Component({
  selector: 'app-tab7',
  templateUrl: './tab7.page.html',
  styleUrls: ['./tab7.page.scss'],
})
export class Tab7Page implements OnInit {
  public reservations: any[] = []; 

  constructor(private reservationService: ReservationService) { } 

  ngOnInit() {
    this.getUserReservations(); 
  }

  getUserReservations() {
    const userId = 'yourUserId'; 
    this.reservationService.getUserReservations(userId).subscribe((reservations) => {
      this.reservations = reservations;
    });
  }
}
