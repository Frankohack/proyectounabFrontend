import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor(private navCtrl: NavController) {}

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

