import { MedicalHistory } from './medical-history.model';

export interface Patient {
  patientId: string;
  identificationNumber: string;
  name: string;
  birthDate: Date;
  address: string;
  phone: string;
  email: string;
  medicalHistories: MedicalHistory[];
}
