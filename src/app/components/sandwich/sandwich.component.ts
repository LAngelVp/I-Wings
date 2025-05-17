import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sandwich',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './sandwich.component.html',
  styleUrl: './sandwich.component.sass'
})
export class SandwichComponent {
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
