import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../tab7/reservation.service';

@Component({
  selector: 'app-tab7',
  templateUrl: './tab7.page.html',
  styleUrls: ['./tab7.page.scss'],
})
export class Tab7Page implements OnInit {
  public reservations: any[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit() {
    this.getUserReservations();
  }

  getUserReservations() {
    const userId = 'yourUserId';
    this.reservationService.getUserReservations(userId).subscribe(
      (reservations) => {
        this.reservations = reservations.map(reservation => ({
          doctor: reservation.doctorId ? `${reservation.doctorId.nombres} ${reservation.doctorId.apellidos}` : 'Nombre del doctor no disponible',
          date: reservation.date,
          user: reservation.userId ? `${reservation.userId.nombresDueno}` : 'Nombre del usuario no disponible',
          mascota: reservation.mascotaId ? `${reservation.mascotaId.nombreMascota}` : 'Nombre de la mascota no disponible',
        }));
        console.log(this.reservations);
      },
      (error) => {
        console.error('Error al obtener reservas:', error);
      }
    );
  }
}
