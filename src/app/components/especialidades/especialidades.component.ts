import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-especialidades',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './especialidades.component.html',
  styleUrl: './especialidades.component.sass'
})
export class EspecialidadesComponent {
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
