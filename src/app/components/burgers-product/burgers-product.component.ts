import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-burgers-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './burgers-product.component.html',
  styleUrl: './burgers-product.component.sass'
})
export class BurgersProductComponent {
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
