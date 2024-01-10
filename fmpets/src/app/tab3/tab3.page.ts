import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  nombresDueno: string = '';
  apellidosDueno: string = '';
  numeroMascotas: number = 1;
  mascotas: { nombreMascota: string; tipoAnimal: string; run: number }[] = [
    { nombreMascota: '', tipoAnimal: '', run: 0 }
  ];
  nickname: string = '';
  contrasena: string = '';
  rutPropietario: string = '';
  correo: string = '';
  telefono: number = 0;
  region: string = '';
  comuna: string = '';
  direccion: string = '';
  numero: number = 0;

  registroExitoso: boolean = false;

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private alertController: AlertController
  ) {}

  actualizarMascotas() {
    this.mascotas = [];
    for (let i = 0; i < this.numeroMascotas; i++) {
      this.mascotas.push({ nombreMascota: '', tipoAnimal: '', run: 0 });
    }
  }

  registrarUsuario() {
    const nuevoUsuario = {
      nombresDueno: this.nombresDueno,
      apellidosDueno: this.apellidosDueno,
      mascotas: this.mascotas,
      nickname: this.nickname,
      contrasena: this.contrasena,
      rutPropietario: this.rutPropietario,
      correo: this.correo,
      telefono: this.telefono,
      region: this.region,
      comuna: this.comuna,
      direccion: this.direccion,
      numero: this.numero
    };

    const backendUrl = 'http://localhost:3000';
    const registroUrl = `${backendUrl}/crear`;

    this.http.post(registroUrl, nuevoUsuario).subscribe(
      async (response) => {
        console.log('Usuario registrado:', response);
        this.registroExitoso = true;

        const alert = await this.alertController.create({
          header: 'Registro Exitoso',
          message: '¡El usuario ha sido registrado exitosamente!',
          buttons: [
            {
              text: 'Ingresar',
              handler: () => {
                this.irAPagina2();
              }
            }
          ]
        });

        await alert.present();
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
      }
    );
  }

  irAPagina2() {
    this.navCtrl.navigateForward('/tabs/tab2');
  }
}
