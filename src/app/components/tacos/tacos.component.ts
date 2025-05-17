import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tacos',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './tacos.component.html',
  styleUrl: './tacos.component.sass'
})
export class TacosComponent {
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
