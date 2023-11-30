import { Component } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss'],
})
export class ReservaComponent {
  constructor(private notificationService: NotificationService) {}

  reservar() {
    this.notificationService.addNotification('La reserva fue confirmada con éxito. Te esperamos.');
  }
}
