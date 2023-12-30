import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HistorialPage } from './historial.page'; // Asegúrate de importar HistorialPage aquí

const routes: Routes = [
  {
    path: '',
    component: HistorialPage, // Asegúrate de usar HistorialPage aquí
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialPageRoutingModule {}
