import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CarruselComponent } from '../../components/carrusel/carrusel.component';
import { ButtonsCategoriesFoodComponent } from '../../components/buttons-categories-food/buttons-categories-food.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LoadingComponent } from "../../components/loading/loading.component";
import { LoadingServiceService } from '../../services/loading-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarruselComponent,
    ButtonsCategoriesFoodComponent,
    LoadingComponent,
    CommonModule
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit {
  icon_message = "assets/message.svg"

  logo_movil = 'assets/logo_humo.webp';
  logo_pantallas_lg = 'assets/header_logo_lg.webp';
  isMobile: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, public loadingService: LoadingServiceService) {}

  ngOnInit(): void {
    this.checkScreenSize();
    // Mostrar el loader al iniciar la carga
    this.loadingService.show();

    // Esperar a que la página esté completamente cargada
    window.addEventListener('load', () => {
      this.loadingService.hide(); // Ocultar el loader inmediatamente después de cargar
    });
  }

  checkScreenSize(): void {
    if (isPlatformBrowser(this.platformId)) {
      const screenWidth = window.innerWidth;
      console.log('Ancho de pantalla:', screenWidth);
    }
  }

  mandar_mensaje(){
    const mensaje = "Me gustaría realizar una orden:\n[Coloca lo que deseas ordenar y la direccion exacta]:\n";
    const numero = "2713997432";
    const direccion_url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(direccion_url, '_blank');
  }
}