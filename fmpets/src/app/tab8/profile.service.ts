import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private userProfileData: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() {
    // Puedes inicializar datos del perfil aquí o obtenerlos del almacenamiento local o del backend.
    this.userProfileData.next({
      name: 'Usuario Ejemplo',
      email: 'usuario@example.com',
      phone: '123456789',
      // Otros campos...
    });
  }

  getUserProfile() {
    return this.userProfileData.asObservable();
  }

  updateUserProfile(profileData: any) {
    // Actualiza el perfil del usuario, podría incluir una llamada al backend.
    this.userProfileData.next(profileData);
  }
}
