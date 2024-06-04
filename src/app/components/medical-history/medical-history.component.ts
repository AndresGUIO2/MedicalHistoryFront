import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { MedicalHistory } from '../../models/medical-history.model';

@Component({
  selector: 'app-medical-history',
  standalone: true,
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css'],
  imports: [FormsModule, CommonModule, HttpClientModule]
})
export class MedicalHistoryComponent {
  identificationNumber: string = '';
  medicalHistories: MedicalHistory[] = [];
  newMedicalHistory: MedicalHistory = {
    medicalHistoryId: '',
    patientId: '',
    doctorId: '',
    registrationDate: new Date(),
    diagnosis: '',
    treatment: '',
    additionalNotes: ''
  };

  constructor(private apiService: ApiService) {}

  searchMedicalHistories() {
    this.apiService.getMedicalHistoriesByIdCard(this.identificationNumber).subscribe((data) => {
      this.medicalHistories = data.map(history => ({
        ...history,
        registrationDate: new Date(history.registrationDate) // Convertir a Date
      }));
    });
  }

  addMedicalHistory() {
    const currentDate = new Date().toISOString().split('T')[0]; // yyyy-MM-dd
    const medicalHistoryToSend = {
      ...this.newMedicalHistory,
      registrationDate: currentDate //
    };

    this.apiService.addMedicalHistory(medicalHistoryToSend as unknown as MedicalHistory).subscribe((data) => {
      alert('Historia Médica añadida correctamente');
      this.medicalHistories.push({
        ...data,
        registrationDate: new Date(data.registrationDate)
      });
    });
  }
}
