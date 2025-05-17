import { Component, OnInit } from '@angular/core';
import { ProductosInterface } from '../../models/productos-interface';
import { BurgersProductComponent } from "../burgers-product/burgers-product.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PapasComponentComponent } from '../papas-component/papas-component.component';
import { AlitasComponentComponent } from '../alitas-component/alitas-component.component';
import { GuarnicionesComponentComponent } from '../guarniciones-component/guarniciones-component.component';
import { BonelessComponentComponent } from '../boneless-component/boneless-component.component';
import { HotdogsComponentComponent } from '../hotdogs-component/hotdogs-component.component';
import { CarnesConQuesoComponentComponent } from '../carnes-con-queso-component/carnes-con-queso-component.component';
import { MatahambreComponentComponent } from '../matahambre-component/matahambre-component.component';
import { BebidasComponentComponent } from '../bebidas-component/bebidas-component.component';
import { ProductosServiceService } from '../../services/productos-service.service';
import { EspecialidadesComponent } from '../especialidades/especialidades.component';
import { NachosComponent } from '../nachos/nachos.component';
import { PastasComponent } from '../pastas/pastas.component';
import { QueTacosComponent } from '../que-tacos/que-tacos.component';
import { TacosComponent } from '../tacos/tacos.component';

@Component({
  selector: 'app-buttons-categories-food',
  standalone: true,
  imports: [
    BurgersProductComponent, 
    PapasComponentComponent,
    AlitasComponentComponent,
    GuarnicionesComponentComponent,
    BonelessComponentComponent,
    HotdogsComponentComponent,
    CarnesConQuesoComponentComponent,
    MatahambreComponentComponent,
    EspecialidadesComponent,
    NachosComponent,
    PastasComponent,
    QueTacosComponent,
    TacosComponent,
    CommonModule,
    FormsModule
  ],
  templateUrl: './buttons-categories-food.component.html',
  styleUrl: './buttons-categories-food.component.sass'
})
export class ButtonsCategoriesFoodComponent {
  dato_a_buscar: string = '';
  categoriaActual: string = '';
  productos: any[] = [];
  
  constructor (private productosServicio: ProductosServiceService) {}

  mostrarProductos(categoria: keyof ProductosInterface): void {
    this.productosServicio.mostrarProductos(categoria).subscribe((productos) => {
      console.log('Productos de', categoria, productos);
      this.productos = productos;
      this.categoriaActual = categoria;
    });
  }

  buscarProducto(): void {
    if (this.dato_a_buscar.trim() !== '') {
      this.productosServicio.buscar_producto(this.dato_a_buscar).subscribe((productos) => {
        this.productos = productos;
        console.log(this.productos)
      });
    } else {
      this.productos = [];
    }
  }
}

