// tab11.page.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab11',
  templateUrl: './tab11.page.html',
  styleUrls: ['./tab11.page.scss']
})
export class Tab11Page implements OnInit {
  reservations: any[] = [];
  medicalRecords: any[] = [];
  pages = [
    { title: 'Reservaciones', url: '/reservaciones', icon: 'calendar' },
    { title: 'Historial Médico', url: '/historial', icon: 'medkit' },
    {
      title: 'Citas Agendadas',
      url: '/scheduled-appointments',
      icon: 'calendar'
    },
    {
      title: 'Citas por Confirmar',
      url: '/appointments-to-confirm',
      icon: 'time'
    },
    {
      title: 'Cerrar Sesion',
      url: '/tabs/tab2',
      icon: 'log-out'
    }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadReservations();
    this.loadMedicalRecords();
  }

  loadReservations() {
    const backendUrl = 'http://localhost:3000';
    const doctorId = localStorage.getItem('userId');
    const reservationsUrl = `${backendUrl}/doctor/${doctorId}/reservas`;

    this.http.get<any[]>(reservationsUrl).subscribe((reservations: any[]) => {
      console.log(reservations);
      this.reservations = reservations;
    });
  }

  loadMedicalRecords() {
    const backendUrl = 'http://localhost:3000';
    const doctorId = localStorage.getItem('userId');
    const medicalRecordsUrl = `${backendUrl}/doctor/${doctorId}/medical-records`;

    this.http.get<any[]>(medicalRecordsUrl).subscribe((records: any[]) => {
      this.medicalRecords = records;
    });
  }
}
