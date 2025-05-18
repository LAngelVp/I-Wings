import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cervezas',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './cervezas.component.html',
  styleUrl: './cervezas.component.sass'
})
export class CervezasComponent {
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
