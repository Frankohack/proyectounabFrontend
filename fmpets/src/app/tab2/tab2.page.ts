import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  showPassword: boolean = false;
  usuario: string = "";
  contrasena: string = "";

  constructor(private http: HttpClient, private navCtrl: NavController, private router: Router, private alertController: AlertController) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  enviarSolicitud() {
    const backendUrl = 'http://localhost:3000';
    const verificarUsuarioUrl = `${backendUrl}/usuario`;
    
    const body = {
      correo: this.usuario,
      contraseña: this.contrasena
    };
  
    this.http.post(verificarUsuarioUrl, body).subscribe(
      (response: any) => {
        console.log('Respuesta del servidor:', response);
  
        if (response && response['existe']) {
          this.router.navigate(['/tabs/tab4']);
        } else {
          this.mostrarAlerta('Usuario no encontrado', 'El usuario o la contraseña son incorrectos.');
        }
      },
      (error) => {
        console.error('Error al verificar usuario:', error);
      }
    );
  }
  
  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
  
    await alert.present();
  }
  
  irARegistro() {
    this.router.navigate(['/tabs/tab3']); 
  }
}