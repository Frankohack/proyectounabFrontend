import { Component } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-tab8',
  templateUrl: 'tab8.page.html',
  styleUrls: ['tab8.page.scss'],
})
export class Tab8Page {

  userProfile: any = {};
  isNameModified: boolean = false;
  isEmailModified: boolean = false;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getUserProfile().subscribe((profile) => {
      this.userProfile = { ...profile };
    });
  }

  onNameChanged() {
    this.isNameModified = true;
  }

  onEmailChanged() {
    this.isEmailModified = true;
  }

  saveProfileChanges() {
    this.profileService.updateUserProfile(this.userProfile);
  }

  onFileChanged(event: any) {

  }

  async takePhoto() {
    try {
      const image = await this.getCameraImage();
    } catch (error) {
      console.error('Error al acceder a la cámara:', error);
    }
  }

  async getCameraImage(): Promise<string> {
    return 'ruta_de_la_imagen_capturada.jpg'; 
  }

}