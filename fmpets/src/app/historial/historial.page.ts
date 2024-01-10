import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss']
})
export class HistorialPage implements OnInit {
  medicalRecords: any[] = [];
  reservations: any[] = [];
  selectedReservation: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadReservations();
  }

  loadReservations() {
    const doctorId = localStorage.getItem('userId');
    if (doctorId) {
      const reservationsUrl = `http://localhost:3000/doctor/${doctorId}/reservas`;
      this.http.get<any[]>(reservationsUrl).subscribe((reservations: any[]) => {
        this.reservations = reservations;
      });
    }
  }

  enviarDescripcion(reservationId: string, description: string) {
    const backendUrl = 'http://localhost:3000';
    const updateUrl = `${backendUrl}/reserva/${reservationId}/descripcion`;

    this.http.put(updateUrl, { descripcion: description }).subscribe({
      next: (response) => {
        console.log('Descripción enviada', response);
      },
      error: (err) => console.error('Error al enviar descripción', err)
    });
  }
}
