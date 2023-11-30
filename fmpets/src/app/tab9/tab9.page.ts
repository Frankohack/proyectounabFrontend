import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Geolocation, GeolocationPosition } from '@capacitor/geolocation';
import * as L from 'leaflet';

@Component({
  selector: 'app-tab9',
  templateUrl: './tab9.page.html',
  styleUrls: ['./tab9.page.scss'],
})
export class Tab9Page implements OnInit {
  @ViewChild('mapElement', { static: true }) mapElement!: ElementRef;

  constructor() {}

  async ngOnInit() {
    const coordinates = await this.getCurrentPosition();
    this.initMap(coordinates);
  }

  async getCurrentPosition(): Promise<GeolocationPosition> {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current coordinates:', coordinates);
    return coordinates;
  }
  

  initMap(coordinates: GeolocationPosition) {
    const map = L.map(this.mapElement.nativeElement).setView([coordinates.coords.latitude, coordinates.coords.longitude], 13);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);
  
    const icon = L.icon({
      iconUrl: 'assets/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    
    L.marker([coordinates.coords.latitude, coordinates.coords.longitude], { icon }).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
    
  }
}  


