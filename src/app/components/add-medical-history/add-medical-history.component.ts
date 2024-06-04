import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { MedicalHistory } from '../../models/medical-history.model';

@Component({
  selector: 'app-add-medical-history',
  standalone: true,
  templateUrl: './add-medical-history.component.html',
  styleUrls: ['./add-medical-history.component.css'],
  imports: [FormsModule, CommonModule]
})
export class AddMedicalHistoryComponent {
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

  addMedicalHistory() {
    // MNid object to transisionate date
    const currentDate = new Date().toISOString().split('T')[0]; // format yyyy-MM-dd
    const medicalHistoryToSend = {
      ...this.newMedicalHistory,
      registrationDate: currentDate // String date
    } as unknown as MedicalHistory;

    this.apiService.addMedicalHistory(medicalHistoryToSend).subscribe((data) => {
      alert('Historia Médica añadida correctamente');
    });
  }
}
