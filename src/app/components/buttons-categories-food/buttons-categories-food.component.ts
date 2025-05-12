import { Component, OnInit } from '@angular/core';
import { ProductosInterface } from '../../models/productos-interface';
import { BurgerProductsListComponent } from "../burger-products-list/burger-products-list.component";
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
    CommonModule,
    FormsModule
  ],
  templateUrl: './buttons-categories-food.component.html',
  styleUrl: './buttons-categories-food.component.sass'
})
export class ButtonsCategoriesFoodComponent {
  categoriaActual: string = '';
productosMostrador: any[] = [];
  productos : ProductosInterface = {
      burgers_list : [
        {
          id: 1,
          nombre: "Clásica",
          descripcion: "Hamburguesa sencilla con carne, lechuga, jitomate y mayonesa.",
          costo: 50,
          costo_papas: 65,
          suprema: {
            descripcion: "Versión suprema con doble carne y más ingredientes.",
            costo: 95
          },
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 2,
          nombre: "Western Bacon",
          descripcion: "Hamburguesa con aros de cebolla, tocino y salsa BBQ.",
          costo: 60,
          costo_papas: 75,
          suprema: {
            descripcion: "Con doble carne, extra tocino y queso.",
            costo: 110
          },
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 3,
          nombre: "Hawaiana",
          descripcion: "Hamburguesa con piña, jamón y queso.",
          costo: 60,
          costo_papas: 75,
          suprema: {
            descripcion: "Versión suprema con doble carne y más piña.",
            costo: 110
          },
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 4,
          nombre: "Coy Burger",
          descripcion: "Hamburguesa especial con receta de la casa.",
          costo: 60,
          costo_papas: 75,
          suprema: {
            descripcion: "Versión suprema con ingredientes secretos extra.",
            costo: 110
          },
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 5,
          nombre: "California",
          descripcion: "Hamburguesa con aguacate, queso suizo y aderezo especial.",
          costo: 60,
          costo_papas: 75,
          suprema: {
            descripcion: "Incluye doble carne y más aguacate.",
            costo: 110
          },
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 6,
          nombre: "BBQ Burger",
          descripcion: "Hamburguesa con carne asada a la BBQ y cebolla caramelizada.",
          costo: 65,
          costo_papas: 80,
          suprema: {
            descripcion: "Con más carne y extra de salsa BBQ.",
            costo: 110
          },
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 7,
          nombre: "Texana",
          descripcion: "Con tocino, jalapeños y salsa tejana picante.",
          costo: 70,
          costo_papas: 85,
          suprema: {
            descripcion: "Versión XL con más carne y jalapeños.",
            costo: 110
          },
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 8,
          nombre: "Pastor Burger",
          descripcion: "Con carne al pastor, piña y cebolla morada.",
          costo: 70,
          costo_papas: 85,
          suprema: {
            descripcion: "Doble carne al pastor y extra piña.",
            costo: 110
          },
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 9,
          nombre: "Doble",
          descripcion: "Hamburguesa con doble carne y doble queso.",
          costo: 80,
          costo_papas: 95,
          suprema: {
            descripcion: "Versión extrema con tres carnes.",
            costo: 150
          },
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 10,
          nombre: "Doble Western",
          descripcion: "Doble carne, aros de cebolla, BBQ y tocino.",
          costo: 85,
          costo_papas: 110,
          suprema: {
            descripcion: "La versión más completa de la Western.",
            costo: 160
          },
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 11,
          nombre: "I Wings Especial Doble",
          descripcion: "Nuestra hamburguesa estrella con ingredientes premium.",
          costo: 100,
          costo_papas: 115,
          suprema: {
            descripcion: "Versión gourmet con triple carne y extras exclusivos.",
            costo: 175
          },
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 12,
          nombre: "Burger Boneless",
          descripcion: "Hamburguesa hecha con boneless de pollo.",
          costo: 100,
          costo_papas: null,
          suprema: null,
          imagen: "https://picsum.photos/800/600"
        }
      ],
      papas_list : [
        {
          id: 1,
          nombre: "Papas a la francesa",
          descripcion: "Crujientes papas clásicas, perfectas para acompañar cualquier platillo.",
          presentaciones: [
            { nombre: "orden completa", costo: 60 },
            { nombre: "media orden", costo: 40 }
          ],
          cantidad: 1,
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 2,
          nombre: "Papas de gajo",
          descripcion: "Papas gruesas sazonadas con un toque especial de especias.",
          presentaciones: [
            { nombre: "orden completa", costo: 100 },
            { nombre: "media orden", costo: 60 }
          ],
          cantidad: 1,
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 3,
          nombre: "Aros de cebolla",
          descripcion: "Deliciosos aros de cebolla empanizados y fritos al punto perfecto.",
          presentaciones: [
            { nombre: "orden completa", costo: 100 },
            { nombre: "media orden", costo: 60 }
          ],
          cantidad: 1,
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 4,
          nombre: "Papas Mix",
          descripcion: "Mezcla de papas a la francesa, de gajo y aros de cebolla.",
          presentaciones: [
            { nombre: "orden completa", costo: 100 }
          ],
          cantidad: 1,
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 5,
          nombre: "Pizza fries",
          descripcion: "Papas cubiertas con queso derretido y pepperoni, estilo pizza.",
          presentaciones: [
            { nombre: "orden completa", costo: 95 }
          ],
          cantidad: 1,
          imagen: "https://picsum.photos/800/600"
        }
      ],
      alitas_list : [
        {
          id: 1,
          nombre: "BBQ",
          descripcion: "Clásicas alitas bañadas en nuestra dulce y ahumada salsa BBQ, una opción que nunca falla.",
          imagen: "https://picsum.photos/800/600",
          precios: {
            6: 75,
            12: 125,
            24: 235,
            36: 340
          }
        },
        {
          id: 2,
          nombre: "BBQ Chipotle",
          descripcion: "La dulzura de la BBQ con el toque ahumado y picosito del chipotle, ¡una explosión de sabor!",
          imagen: "https://picsum.photos/800/600",
          precios: {
            6: 75,
            12: 125,
            24: 235,
            36: 340
          }
        },
        {
          id: 3,
          nombre: "BBQ Habanero",
          descripcion: "Salsa BBQ con habanero para los amantes del picante con sabor intenso.",
          imagen: "https://picsum.photos/800/600",
          precios: {
            6: 75,
            12: 125,
            24: 235,
            36: 340
          }
        },
        {
          id: 4,
          nombre: "Búfalo",
          descripcion: "Alitas bañadas en nuestra clásica y picante salsa búfalo, ideales para paladares valientes.",
          imagen: "https://picsum.photos/800/600",
          precios: {
            6: 75,
            12: 125,
            24: 235,
            36: 340
          }
        },
        {
          id: 5,
          nombre: "Mango Habanero",
          descripcion: "Una deliciosa mezcla de dulzura tropical y picor intenso, ¡para los que buscan algo diferente!",
          imagen: "https://picsum.photos/800/600",
          precios: {
            6: 75,
            12: 125,
            24: 235,
            36: 340
          }
        },
        {
          id: 6,
          nombre: "Teriyaki",
          descripcion: "Alitas bañadas en suave salsa teriyaki con un toque oriental dulce y salado.",
          imagen: "https://picsum.photos/800/600",
          precios: {
            6: 75,
            12: 125,
            24: 235,
            36: 340
          }
        },
        {
          id: 7,
          nombre: "BBQ Tamarindo",
          descripcion: "Una exótica combinación de salsa BBQ con tamarindo que mezcla dulzura y acidez.",
          imagen: "https://picsum.photos/800/600",
          precios: {
            6: 75,
            12: 125,
            24: 235,
            36: 340
          }
        },
        {
          id: 8,
          nombre: "Naranja Chipotle",
          descripcion: "Cítrica y ahumada, esta salsa combina naranja fresca con chipotle para un sabor único.",
          imagen: "https://picsum.photos/800/600",
          precios: {
            6: 75,
            12: 125,
            24: 235,
            36: 340
          }
        },
        {
          id: 9,
          nombre: "Mango Hot",
          descripcion: "Fusión tropical de mango dulce con chiles picantes, ¡una combinación atrevida y deliciosa!",
          imagen: "https://picsum.photos/800/600",
          precios: {
            6: 75,
            12: 125,
            24: 235,
            36: 340
          }
        }
      ],
      guarniciones_list : [
        {
          id: 1,
          nombre: "Guacamole",
          descripcion: "Cremoso y fresco, preparado al momento con aguacate, jitomate, cebolla y un toque de limón.",
          imagen: "https://picsum.photos/800/600",
          porciones: [
            { nombre: "chico", costo: 15 },
            { nombre: "grande", costo: 45 }
          ]
        },
        {
          id: 2,
          nombre: "Pico de gallo",
          descripcion: "Tradicional mezcla mexicana de jitomate, cebolla y chile fresco, ideal para acompañar cualquier platillo.",
          imagen: "https://picsum.photos/800/600",
          porciones: [
            { nombre: "porcion", costo: 15 }
          ]
        },
        {
          id: 3,
          nombre: "Mayonesa",
          descripcion: "Mayonesa cremosa servida en porción individual para complementar tus platillos favoritos.",
          imagen: "https://picsum.photos/800/600",
          porciones: [
            { nombre: "porcion", costo: 15 }
          ]
        }
      ],
      boneless_list : [
        {
          id: 1,
          nombre: "Individuales",
          descripcion: "Perfecta porción para uno: jugosos boneless bañados en tu salsa favorita, acompañados de papas o apio.",
          costo: 75,
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 2,
          nombre: "Pareja",
          descripcion: "Ideal para compartir: doble ración de boneless crujientes con dos salsas a elegir y acompañamientos.",
          costo: 140,
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 3,
          nombre: "Familiar",
          descripcion: "¡Para todos! Gran porción de boneless doraditos con variedad de salsas y guarniciones para todos los gustos.",
          costo: 260,
          imagen: "https://picsum.photos/800/600"
        }
      ],
      hotdogs_list : [
        {
          id: 1,
          nombre: "Clásico",
          descripcion: "El tradicional hot dog con salchicha asada, pan suave, mostaza, cátsup y cebolla crujiente.",
          costo: 25,
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 2,
          nombre: "Tocino",
          descripcion: "Delicioso hot dog envuelto en tocino dorado, con toppings clásicos que resaltan su sabor.",
          costo: 35,
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 3,
          nombre: "Pastor",
          descripcion: "Un giro mexicano: salchicha acompañada de carne al pastor, piña y cebolla, todo en un pan suave.",
          costo: 35,
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 4,
          nombre: "Piña",
          descripcion: "Toque tropical con piña a la plancha que contrasta perfectamente con el sabor salado de la salchicha.",
          costo: 35,
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 5,
          nombre: "Champiñones",
          descripcion: "Cremosos champiñones salteados acompañan la salchicha para una experiencia sabrosa y diferente.",
          costo: 35,
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 6,
          nombre: "Guacamole",
          descripcion: "Hot dog con una capa generosa de guacamole casero, fresco y lleno de sabor.",
          costo: 35,
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 7,
          nombre: "Súper",
          descripcion: "El más completo: doble salchicha, tocino, guacamole, champiñones y todos los toppings clásicos.",
          costo: 45,
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 8,
          nombre: "Bistec",
          descripcion: "Una combinación potente: hot dog con suculentos trozos de bistec asado y salsas especiales.",
          costo: 45,
          imagen: "https://picsum.photos/800/600"
        }
      ],
      carnes_con_queso_list : [
        {
          id: 1,
          nombre: "hawaiano",
          descripcion: "Jugosa carne con trozos de piña y queso gratinado, una combinación tropical irresistible.",
          costo: 110,
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 2,
          nombre: "taco salad",
          descripcion: "Crujiente tortilla rellena de carne, queso fundido, lechuga fresca y aderezo de la casa.",
          costo: 120,
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 3,
          nombre: "super taco",
          descripcion: "Un taco gigante con doble porción de carne, queso derretido y los ingredientes clásicos.",
          costo: 100,
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 4,
          nombre: "pingüino",
          descripcion: "Especialidad de la casa: carne sazonada con doble queso gratinado en tortilla suave.",
          costo: 120,
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 5,
          nombre: "bistec a la mexicana",
          descripcion: "Trozos de bistec salteados con jitomate, cebolla y chile, cubiertos con queso derretido.",
          costo: 120,
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 6,
          nombre: "fajitas",
          descripcion: "Tiras de carne a la plancha con pimientos y cebolla, coronadas con queso fundido.",
          costo: 120,
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 7,
          nombre: "pechuga gratinada",
          descripcion: "Pechuga jugosa al grill, cubierta con una generosa capa de queso gratinado y especias.",
          costo: 110,
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 8,
          nombre: "ensalada cesar",
          descripcion: "Lechuga crujiente, pollo a la plancha y aderezo César, con un toque de queso parmesano.",
          costo: 90,
          imagen: "https://picsum.photos/800/600"
        }
      ],
      matahambre_list : [
        {
          id: 1,
          nombre: "chico",
          descripcion: "Ideal para abrir apetito: incluye carne al pastor recién hecha, acompañada de piña y cebolla asada.",
          costo: 120,
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 2,
          nombre: "mediano",
          descripcion: "Una porción perfecta para uno con hambre real. Pastor bien doradito con guarniciones clásicas.",
          costo: 195,
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 3,
          nombre: "grande",
          descripcion: "Porción generosa para compartir o para los que no se quedan con hambre. Incluye tortillas, salsas y limones.",
          costo: 265,
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 4,
          nombre: "fortachón",
          descripcion: "El favorito de los valientes: carne al pastor extra, doble piña, y un toque especial de la casa.",
          costo: 280,
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 5,
          nombre: "kilo de pastor",
          descripcion: "1 kilo completo de deliciosa carne al pastor, ideal para reuniones y fiestas.",
          costo: 280,
          imagen: "https://picsum.photos/800/600"
        },
        {
          id: 6,
          nombre: "kilo de pastor gratinado",
          descripcion: "Nuestro clásico kilo de pastor, cubierto con queso fundido para una experiencia irresistible.",
          costo: 320,
          imagen: "https://picsum.photos/800/600"
        }
      ]
    };

  // Método para filtrar productos por categoría
  mostrarProductos(categoria: keyof ProductosInterface): void {
    this.categoriaActual = categoria;
    this.productosMostrador = this.productos[categoria];
  }
}
