import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-guarniciones-component',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './guarniciones-component.component.html',
  styleUrl: './guarniciones-component.component.sass'
})
export class GuarnicionesComponentComponent {
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
