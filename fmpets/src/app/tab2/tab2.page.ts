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
    if (!this.validateEmail(this.usuario)) {
      this.mostrarAlerta('Correo inválido', 'Por favor, ingresa un correo electrónico válido.');
      return;
    }
    const backendUrl = 'http://localhost:3000';
    const verificarUsuarioUrl =`${backendUrl}/usuario`;
    const verificarTrabajadorUrl = `${backendUrl}/trabajador`; 
    const body = {correo: this.usuario,contraseña: this.contrasena};
  
    this.http.post(verificarUsuarioUrl, body).subscribe((responseUsuario: any) => {
      console.log('Respuesta del servidor (Usuario):', responseUsuario);
      if (responseUsuario && responseUsuario['existe']) {
        console.log(responseUsuario)
        localStorage.setItem('userId', responseUsuario.userId);
        this.router.navigate(['/tabs/tab4']);
      } else {
        this.http.post(verificarTrabajadorUrl, body).subscribe((responseTrabajador: any) => {
          console.log('Respuesta del servidor (Trabajador):', responseTrabajador);
          if (responseTrabajador && responseTrabajador['existe']) {
            console.log(responseTrabajador)
            this.router.navigate(['/tabs/tab11']);
          } else {
            this.mostrarAlerta('Usuario no encontrado', 'El usuario o la contraseña son incorrectos.');
          }
        },(errorTrabajador) => {
          console.error('Error al verificar trabajador:', errorTrabajador);
        });
      }
    },(errorUsuario) => {
      console.error('Error al verificar usuario:', errorUsuario);
    });
  }
  
  
  validateEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
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
