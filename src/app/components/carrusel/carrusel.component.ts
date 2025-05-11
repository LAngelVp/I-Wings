import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.sass'
})
export class CarruselComponent {
  lista_promociones = [
    {
      id: 1,
      Nombre: "Cillum aliqua elit anim",
      Costo: 150,
      descripcion: "Velit voluptate magna enim sunt deserunt nostrud minim sunt enim est sint.",
      img: "https://cdn.pixabay.com/photo/2021/09/02/18/00/burger-6594067_1280.jpg"
    },
    {
      id: 2,
      Nombre: "Dolor incididunt pariatur",
      Costo: 200,
      descripcion: "Aliqua ex excepteur dolor velit officia deserunt dolore.",
      img: "https://cdn.pixabay.com/photo/2019/02/20/09/44/hamburger-4008822_960_720.jpg"
    },
    {
      id: 3,
      Nombre: "Sint proident ex laboris",
      Costo: 180,
      descripcion: "Ex cupidatat nulla labore magna. Veniam excepteur deserunt dolor enim.",
      img: "https://cdn.pixabay.com/photo/2018/03/06/13/36/pizza-3203417_960_720.jpg"
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
