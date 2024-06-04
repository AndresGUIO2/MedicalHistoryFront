export interface MedicalHistory {
    medicalHistoryId: string;  
    patientId: string;  
    doctorId: string;   
    registrationDate: Date;
    diagnosis: string;
    treatment: string;
    additionalNotes: string;
  }
  