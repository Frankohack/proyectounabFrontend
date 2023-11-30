import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/doctors`);
  }

  createReservation(doctorId: string, date: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/reservations`, { doctorId, date });
  }
}

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  public myDate: string = new Date().toISOString();
  public selectedDoctor: any; 
  public doctors: any[] = []; 

  constructor(private doctorService: DoctorService, private alertController: AlertController) { } 

  ngOnInit() {
    this.getDoctors(); 
  }

  getDoctors() {
    this.doctorService.getDoctors().subscribe((doctors) => {
      this.doctors = doctors;
    });
  }

  async bookAppointment() {
    const date = new Date(this.myDate);
    if (date < new Date()) {
      console.log('No puedes reservar una cita en el pasado.');
      return;
    }

    const isoDate = date.toISOString();
    this.doctorService.createReservation(this.selectedDoctor, isoDate).subscribe(async (response) => {
      console.log(response);
      const alert = await this.alertController.create({
        header: 'Reserva exitosa',
        message: '¡Excelente! Tu reserva ha sido creada correctamente. Te llegará una notificación a tu correo electrónico ' + response.correo,
        buttons: ['OK']
      });

      await alert.present();
    });
  }
}
