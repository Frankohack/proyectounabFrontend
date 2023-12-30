import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NotificationService } from '../tab6/notification.service'; // Asegúrate de importar correctamente

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {
  notificationCount: number = 0;

  constructor(
    private navCtrl: NavController,
    private notificationService: NotificationService // Inyecta el NotificationService
  ) {}

  ngOnInit() {
    this.notificationService.getNotificationCount().subscribe((count: number) => {
      this.notificationCount = count;
    });
    
  }

  irAInicio() {
    this.navCtrl.navigateRoot('/tabs/tab5');
  }

  irAReserva() {
    this.navCtrl.navigateRoot('/tabs/tab6');
  }

  irANotificaciones() {
    this.navCtrl.navigateRoot('/tabs/tab7');
  }

  irAMisReservas() {
    this.navCtrl.navigateRoot('/tabs/tab7');
  }

  irAPerfil() {
    this.navCtrl.navigateRoot('/tabs/tab8');
  }
  
}

