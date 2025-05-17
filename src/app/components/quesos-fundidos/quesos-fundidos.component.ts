import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quesos-fundidos',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './quesos-fundidos.component.html',
  styleUrl: './quesos-fundidos.component.sass'
})
export class QuesosFundidosComponent {
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
