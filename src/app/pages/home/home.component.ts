import { Component } from '@angular/core';
import { CarruselComponent } from '../../components/carrusel/carrusel.component';
import { ButtonsCategoriesFoodComponent } from '../../components/buttons-categories-food/buttons-categories-food.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarruselComponent,
    ButtonsCategoriesFoodComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  icon_message = "assets/message.svg"

  logo_movil = 'assets/logo_humo.webp';
  logo_pantallas_lg = 'assets/header_logo_lg.webp';
  isMobile: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768; // Si el ancho de la pantalla es menor o igual a 768px
  }

  mandar_mensaje(){
    const mensaje = "Me gustaría realizar una orden:\n[Coloca lo que deseas ordenar y la direccion exacta]:\n";
    const numero = "2713997432";
    const direccion_url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(direccion_url, '_blank');
  }
}
