import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalHistoryComponent } from './components/medical-history/medical-history.component';
import { AddMedicalHistoryComponent } from './components/add-medical-history/add-medical-history.component';

export const routes: Routes = [
  { path: 'medical-history', component: MedicalHistoryComponent },
  { path: 'add-medical-history', component: AddMedicalHistoryComponent },
  { path: '', redirectTo: '/medical-history', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
