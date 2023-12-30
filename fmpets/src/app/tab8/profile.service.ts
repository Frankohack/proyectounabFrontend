import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private userProfileData: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() {
    this.userProfileData.next({
      name: 'Usuario Ejemplo',
      email: 'usuario@example.com',
      phone: '123456789',
    });
  }

  getUserProfile() {
    return this.userProfileData.asObservable();
  }

  updateUserProfile(profileData: any) {

    this.userProfileData.next(profileData);
  }
}
