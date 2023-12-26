// tab11.page.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab11',
  templateUrl: './tab11.page.html',
  styleUrls: ['./tab11.page.scss'],
})
export class Tab11Page implements OnInit {
  reservations: any[] = [];
  medicalRecords: any[] = [];
  pages = [
    { title: 'Reservaciones', url: '/reservations', icon: 'calendar' },
    { title: 'Historial Médico', url: '/medical-records', icon: 'medkit' },
    { title: 'Citas Agendadas', url: '/scheduled-appointments', icon: 'calendar' },
    { title: 'Citas por Confirmar', url: '/appointments-to-confirm', icon: 'time' },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadReservations();
    this.loadMedicalRecords();
  }

  loadReservations() {
    const backendUrl = 'http://localhost:3000';
    const reservationsUrl = `${backendUrl}/reservations-doctor-details`;
  
    this.http.get<any[]>(reservationsUrl).subscribe((reservations: any[]) => {
      console.log(reservations); 
      this.reservations = reservations.map(reservation => ({
        doctor: reservation.doctorId ? `${reservation.doctorId.nombres} ${reservation.doctorId.apellidos}` : 'Nombre del doctor no disponible',
      }));
    });
  }

  loadMedicalRecords() {
    const backendUrl = 'http://localhost:3000';
    const medicalRecordsUrl = `${backendUrl}/medical-records/animalId`;

    this.http.get<any[]>(medicalRecordsUrl).subscribe((records: any[]) => {
      this.medicalRecords = records;
    });
  }
}
