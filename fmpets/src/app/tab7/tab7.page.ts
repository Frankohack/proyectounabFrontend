// tab7.page.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab7',
  templateUrl: './tab7.page.html',
  styleUrls: ['./tab7.page.scss']
})
export class Tab7Page implements OnInit {
  public reservations: any[] = [];

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUserReservations();
  }

  getUserReservations() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      const reservationsUrl = `${this.apiUrl}/usuario/${userId}/reservas`;
      this.http.get<any[]>(reservationsUrl).subscribe(
        (reservations) => {
          this.reservations = reservations;
          console.log('Reservas del usuario:', this.reservations);
        },
        (error) => {
          console.error('Error al obtener reservas:', error);
        }
      );
    } else {
      console.error('No se encontró el ID del usuario en localStorage.');
    }
  }
}
