import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cafes',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './cafes.component.html',
  styleUrl: './cafes.component.sass'
})
export class CafesComponent {
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
