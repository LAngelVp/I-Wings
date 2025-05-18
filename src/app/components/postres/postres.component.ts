import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-postres',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './postres.component.html',
  styleUrl: './postres.component.sass'
})
export class PostresComponent {
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
