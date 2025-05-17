import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sincronizadas',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './sincronizadas.component.html',
  styleUrl: './sincronizadas.component.sass'
})
export class SincronizadasComponent {
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
