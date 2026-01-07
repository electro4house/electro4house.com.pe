import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="nav-bar" [class.nav-hidden]="isHeaderHidden">
      <div class="logo-container" routerLink="/">  
        <img src="assets/img/logo.png" alt="Mi Logo" style="height: 50px;">     
      </div>      
      <div class="links">
        <a (click)="scrollTo('servicios')">Servicios</a>
        <a (click)="scrollTo('galeria')">Galería</a>
        <a (click)="scrollTo('ubicacion')">Ubicación</a>
        <a (click)="scrollTo('contacto')" class="btn-reserva">Cita</a>
      </div>
    </nav>
  `,
  styles: [`
        .nav-bar {
      position: fixed; 
      top: 0; 
      width: 100%;
      display: flex; 
      justify-content: space-between; 
      align-items: center;
      /* Quitamos el padding vertical fijo para que el logo defina el alto */
      padding: 5px 20px; 
      background: white;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      transition: transform 0.3s; 
      z-index: 1000;
      box-sizing: border-box;
      /* Permitimos que el alto crezca según el contenido */
      height: 100px; 
      min-height: 100px; 
    }

    /* Esta es la clase que debe tener tu etiqueta <img> */
    .nav-logo {
      height: 300px !important; /* Prueba con 100px, si es mucho, baja a 80px */
      width: auto;
      display: block;
      transition: all 0.3s ease;
    }

    .logo { 
      /* Aseguramos que el contenedor del logo no limite el tamaño */
      display: flex;
      align-items: center;
      font-weight: bold; 
      color: #e91e63; 
      cursor: pointer; 
      height: 100%;
    }

    /* Mantén el resto de tus clases (.links, .btn-reserva, etc.) igual */
    .links { display: flex; align-items: center; gap: 15px; }
    .links a { 
      text-decoration: none; color: #555; 
      font-size: 0.9rem; cursor: pointer;
      transition: color 0.2s;
    }
    .links a:hover { color: #e91e63; }
    .btn-reserva {
      background: #e91e63; color: white !important;
      padding: 6px 12px; border-radius: 20px;
    }
    /* Responsive básico */
    @media (max-width: 600px) {
      .links a:not(.btn-reserva) { display: none; } /* Oculta textos largos en móvil */
    }
  `]
})
export class NavbarComponent {
  isHeaderHidden = false;
  lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > this.lastScrollTop && st > 50) {
      this.isHeaderHidden = true;
    } else {
      this.isHeaderHidden = false;
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  }

  // Función para mover la pantalla suavemente a cada sección
  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}