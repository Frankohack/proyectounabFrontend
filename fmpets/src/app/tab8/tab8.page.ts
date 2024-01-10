import { Component } from '@angular/core';
import { ProfileService } from './profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab8',
  templateUrl: 'tab8.page.html',
  styleUrls: ['tab8.page.scss']
})
export class Tab8Page {
  userProfile: any = {
    tipoAnimal: '',
    nombreMascota: ''
  };
  isNameModified: boolean = false;
  isEmailModified: boolean = false;

  private backendUrl = 'http://localhost:3000';

  constructor(
    private profileService: ProfileService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.profileService.getUserProfile().subscribe((profile) => {
      this.userProfile = { ...profile };
    });
  }

  saveProfileChanges() {
    if (this.isNameModified || this.isEmailModified) {
      this.profileService.updateUserProfile(this.userProfile);
      this.isNameModified = false;
      this.isEmailModified = false;
    }
  }

  addPet() {
    const petData = {
      tipoAnimal: this.userProfile.tipoAnimal,
      nombreMascota: this.userProfile.nombreMascota
    };

    const usuarioId = localStorage.getItem('userId');
    if (usuarioId) {
      this.http
        .post(
          `${this.backendUrl}/usuario/${usuarioId}/agregar-mascota`,
          petData
        )
        .subscribe(
          (response) => console.log('Mascota agregada', response),
          (error) => console.error('Error al agregar mascota', error)
        );
    } else {
      console.error('Error: No se encontró el ID del usuario.');
    }
  }

  onNameChanged() {
    this.isNameModified = true;
  }

  onEmailChanged() {
    this.isEmailModified = true;
  }

  onFileChanged(event: any) {}

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
