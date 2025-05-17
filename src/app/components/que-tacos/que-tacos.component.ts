import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-que-tacos',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './que-tacos.component.html',
  styleUrl: './que-tacos.component.sass'
})
export class QueTacosComponent {
  nota:string = "Nota: El costo por taco es de $35 por pieza en caso de pedirlos de manera individual."
@Input() productos: any[] = [];
  modalOpen: boolean = false;
  selectedProducto: any = null;

  openModal(producto: any) {
    this.selectedProducto = producto;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.selectedProducto = null;
  }
}
