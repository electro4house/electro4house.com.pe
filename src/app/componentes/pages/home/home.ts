import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <--- IMPORTANTE
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule], // <--- agrégalo aquí
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  // Creamos un objeto para guardar los datos del formulario
  datos = {
    nombre: '',
    whatsapp: '',
    servicio: ''
  };

  enviarWhatsApp() {
    const miNumero = "51906148811"; // Tu número con código de país
    
    // Construimos el mensaje con los datos del formulario
    const mensaje = `¡Hola! Mi nombre es *${this.datos.nombre}* 💅.
Vengo de la web y quiero reservar una cita.
*Servicio:* ${this.datos.servicio}
*Mi contacto:* ${this.datos.whatsapp}`;

    // Codificamos el texto para que sea válido en una URL
    const mensajeEncoded = encodeURIComponent(mensaje);
    
    // Creamos el enlace final
    const url = `https://wa.me/${miNumero}?text=${mensajeEncoded}`;
    
    // Abrimos en una pestaña nueva
    window.open(url, '_blank');
  }

   scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}