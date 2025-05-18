import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgOptimizedImage
  ],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.sass'
})
export class CarruselComponent {
  lista_promociones = [
    {
      id: 1,
      Nombre: "doble western con papas",
      Costo: 160,
      descripcion: "Jugosa hamburguesa doble con carne a la parrilla, queso derretido y crujiente tocino. Un clásico estilo western que conquista con cada mordida con papas a la francesa.",
      img: "assets/HAMBURGUESAS/westerndoble.jpg"
    },
    {
      id: 2,
      Nombre: "Super taco",
      Costo: 110,
      descripcion: "Sincronizada con carne de pastor y bistec cocinada a su punto y muy jugosa. Incluye la quesadilla con su guacamole y papas a la francesa",
      img: "assets/MATAHAMBRES/QUESADILLA.jpg"
    },
    {
      id: 3,
      Nombre: "HAWAIANO",
      Costo: 110,
      descripcion: "Delicioso platillo con carne de pastor, piña y queso con papas. Incluye su tortilla de harina o maiz.",
      img: "assets/MATAHAMBRES/HAWAIANO.jpg"
    }
  ];
  
  currentIndex = 0;
  promoSeleccionado: any = null;
  
  cambiarSlide(index: number) {
    this.currentIndex = index;
  }
  
  abrirModal(promo: any) {
    this.promoSeleccionado = promo;
  }
  
  cerrarModal() {
    this.promoSeleccionado = null;
  }
}
