import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nachos',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './nachos.component.html',
  styleUrl: './nachos.component.sass'
})
export class NachosComponent {
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
