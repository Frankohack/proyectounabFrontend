import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  medicalRecords: any[] = []; 

  constructor() { }

  ngOnInit() {
  }
}
@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  private backendUrl = 'http://localhost:3000'; 
  public medicalRecords: any[] = []; 

  constructor(private http: HttpClient) { }

  loadMedicalRecords() {
    const medicalRecordsUrl = `${this.backendUrl}/medical-records/animalId`; 

    this.http.get<any[]>(medicalRecordsUrl).subscribe((records: any[]) => {
      this.medicalRecords = records;
    });
  }
}

