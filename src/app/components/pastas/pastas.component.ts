import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pastas',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './pastas.component.html',
  styleUrl: './pastas.component.sass'
})
export class PastasComponent {
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
