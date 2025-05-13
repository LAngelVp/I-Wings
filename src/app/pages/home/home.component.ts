import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CarruselComponent } from '../../components/carrusel/carrusel.component';
import { ButtonsCategoriesFoodComponent } from '../../components/buttons-categories-food/buttons-categories-food.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LoadingComponent } from "../../components/loading/loading.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarruselComponent,
    ButtonsCategoriesFoodComponent,
    CommonModule
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  icon_message = "assets/ICONOS/message.svg"
  icon_location = "assets/ICONOS/location_icon.svg"

  logo_movil = 'assets/BANNERS/logo_animado_banner.svg';
  logo_pantallas_lg = 'assets/BANNERS/local_restaurante.jpg';


  mandar_mensaje(){
    const mensaje = "Me gustaría realizar una orden:\n[Coloca lo que deseas ordenar y la direccion exacta]:\n";
    const numero = "2712250569";
    const direccion_url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(direccion_url, '_blank');
  }

  mostrar_ubicacion(){
    const ruta = "https://maps.app.goo.gl/Tzrw5zD21w97bdGJ6";
    window.open(ruta, '_blank');
  }
}