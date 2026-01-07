// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/pages/home/home'

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Inicio - Salón de Uñas' },
  // Aquí podrías añadir más rutas en el futuro, ej:
  // { path: 'galeria', loadComponent: () => import('./galeria/galeria.component').then(m => m.GaleriaComponent) },
  { path: '**', redirectTo: '' } // Redirige a inicio si la ruta no existe
];