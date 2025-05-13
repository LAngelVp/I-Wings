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
      Nombre: "Hamburguesa doble con papas a la francesa",
      Costo: 145,
      descripcion: "Hamburguesa con doble carne de buen tamaño y gran sabor y jugocidad. Incluye papas a la francesa",
      img: "https://scontent.fjal3-1.fna.fbcdn.net/v/t39.30808-6/472786798_590680137228077_8391276064795598147_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHoDpGQHpdRxBKy_0_0DzgeS4n-xSF1KltLif7FIXUqW4z9C7clx2Sj0e-zeU1Oy380fc2bAiSi4pj1QxmDnuR7&_nc_ohc=CXuiraSTNuMQ7kNvwGT0AkT&_nc_oc=AdkiNlJ6NxTBA2MYteTBMqVtBgzapnkY7-4VRvBxygddopaWwo4r9gbnBD9cyPC2TFAs3gHVgFxEt0iT-D9d9aXK&_nc_zt=23&_nc_ht=scontent.fjal3-1.fna&_nc_gid=T--GmUkVco6052LWb54pBA&oh=00_AfIoO4kHVx1dFMYqmewltztFhROuTmLmYpPPdDu4qEON5g&oe=682897A9"
    },
    {
      id: 2,
      Nombre: "Super taco",
      Costo: 120,
      descripcion: "Sincronizada con carne de pastor y bistec cocinada a su punto y muy jugosa. Incluye la quesadilla con su guacamole y papas a la francesa",
      img: "assets/MATAHAMBRES/QUESADILLA.jpg"
    },
    {
      id: 3,
      Nombre: "HAWAIANO",
      Costo: 180,
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
