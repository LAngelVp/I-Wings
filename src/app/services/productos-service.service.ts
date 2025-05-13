import { Injectable } from '@angular/core';
import { ProductosInterface } from '../models/productos-interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {
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
            imagen: "assets/HAMBURGUESAS/CLASICA.jpg"
          },
          {
            id: 2,
            nombre: "Western Bacon",
            descripcion: "Hamburguesa con aros de cebolla, tocino.",
            costo: 60,
            costo_papas: 75,
            suprema: {
              descripcion: "Con doble carne, extra tocino y queso.",
              costo: 110
            },
            imagen: "assets/LOGO/Logo_animado.jpeg"
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
            imagen: "assets/LOGO/Logo_animado.jpeg"
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
            imagen: "assets/LOGO/Logo_animado.jpeg"
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
            imagen: "assets/LOGO/Logo_animado.jpeg"
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
            imagen: "assets/LOGO/Logo_animado.jpeg"
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
            imagen: "assets/LOGO/Logo_animado.jpeg"
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
            imagen: "assets/LOGO/Logo_animado.jpeg"
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
            imagen: "assets/LOGO/Logo_animado.jpeg"
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
            imagen: "assets/LOGO/Logo_animado.jpeg"
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
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 12,
            nombre: "Burger Boneless",
            descripcion: "Hamburguesa hecha con boneless de pollo.",
            costo: 100,
            costo_papas: null,
            suprema: null,
            imagen: "assets/LOGO/Logo_animado.jpeg"
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
            imagen: "https://cdn.pixabay.com/photo/2019/11/04/12/26/fries-4601057_960_720.jpg"
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
            imagen: "https://cdn.pixabay.com/photo/2018/08/27/16/01/food-3635354_960_720.jpg"
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
            imagen: "https://cdn.pixabay.com/photo/2019/04/05/00/07/fried-onion-4104056_1280.jpg"
          },
          {
            id: 4,
            nombre: "Papas Mix",
            descripcion: "Mezcla de papas a la francesa, de gajo y aros de cebolla.",
            presentaciones: [
              { nombre: "orden completa", costo: 100 }
            ],
            cantidad: 1,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 5,
            nombre: "Pizza fries",
            descripcion: "Papas cubiertas con queso derretido y pepperoni, estilo pizza.",
            presentaciones: [
              { nombre: "orden completa", costo: 95 }
            ],
            cantidad: 1,
            imagen: "assets/PAPAS/PAPAS_PIZZA.jpg"
          }
        ],
        alitas_list : [
          {
            id: 1,
            nombre: "BBQ",
            descripcion: "Clásicas alitas bañadas en nuestra dulce y ahumada salsa BBQ, una opción que nunca falla.",
            imagen: "assets/LOGO/Logo_animado.jpeg",
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
            imagen: "assets/LOGO/Logo_animado.jpeg",
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
            imagen: "assets/LOGO/Logo_animado.jpeg",
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
            imagen: "assets/LOGO/Logo_animado.jpeg",
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
            imagen: "assets/LOGO/Logo_animado.jpeg",
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
            imagen: "assets/LOGO/Logo_animado.jpeg",
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
            imagen: "assets/LOGO/Logo_animado.jpeg",
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
            imagen: "assets/LOGO/Logo_animado.jpeg",
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
            imagen: "assets/LOGO/Logo_animado.jpeg",
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
            imagen: "assets/LOGO/Logo_animado.jpeg",
            porciones: [
              { nombre: "chico", costo: 15 },
              { nombre: "grande", costo: 45 }
            ]
          },
          {
            id: 2,
            nombre: "Pico de gallo",
            descripcion: "Tradicional mezcla mexicana de jitomate, cebolla y chile fresco, ideal para acompañar cualquier platillo.",
            imagen: "assets/LOGO/Logo_animado.jpeg",
            porciones: [
              { nombre: "porcion", costo: 15 }
            ]
          },
          {
            id: 3,
            nombre: "Mayonesa",
            descripcion: "Mayonesa cremosa servida en porción individual para complementar tus platillos favoritos.",
            imagen: "assets/LOGO/Logo_animado.jpeg",
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
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 2,
            nombre: "Pareja",
            descripcion: "Ideal para compartir: doble ración de boneless crujientes con dos salsas a elegir y acompañamientos.",
            costo: 140,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 3,
            nombre: "Familiar",
            descripcion: "¡Para todos! Gran porción de boneless doraditos con variedad de salsas y guarniciones para todos los gustos.",
            costo: 260,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          }
        ],
        hotdogs_list : [
          {
            id: 1,
            nombre: "Clásico",
            descripcion: "El tradicional hot dog con salchicha asada, pan suave, mostaza, cátsup y cebolla crujiente.",
            costo: 25,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 2,
            nombre: "Tocino",
            descripcion: "Delicioso hot dog envuelto en tocino dorado, con toppings clásicos que resaltan su sabor.",
            costo: 35,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 3,
            nombre: "Pastor",
            descripcion: "Un giro mexicano: salchicha acompañada de carne al pastor, piña y cebolla, todo en un pan suave.",
            costo: 35,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 4,
            nombre: "Piña",
            descripcion: "Toque tropical con piña a la plancha que contrasta perfectamente con el sabor salado de la salchicha.",
            costo: 35,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 5,
            nombre: "Champiñones",
            descripcion: "Cremosos champiñones salteados acompañan la salchicha para una experiencia sabrosa y diferente.",
            costo: 35,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 6,
            nombre: "Guacamole",
            descripcion: "Hot dog con una capa generosa de guacamole casero, fresco y lleno de sabor.",
            costo: 35,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 7,
            nombre: "Súper",
            descripcion: "El más completo: doble salchicha, tocino, guacamole, champiñones y todos los toppings clásicos.",
            costo: 45,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 8,
            nombre: "Bistec",
            descripcion: "Una combinación potente: hot dog con suculentos trozos de bistec asado y salsas especiales.",
            costo: 45,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          }
        ],
        carnes_con_queso_list : [
          {
            id: 1,
            nombre: "hawaiano",
            descripcion: "Jugosa carne con trozos de piña y queso gratinado, una combinación tropical irresistible.",
            costo: 110,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 2,
            nombre: "taco salad",
            descripcion: "Crujiente tortilla rellena de carne, queso fundido, lechuga fresca y aderezo de la casa.",
            costo: 120,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 3,
            nombre: "super taco",
            descripcion: "Un taco gigante con doble porción de carne, queso derretido y los ingredientes clásicos.",
            costo: 100,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 4,
            nombre: "pingüino",
            descripcion: "Especialidad de la casa: carne sazonada con doble queso gratinado en tortilla suave.",
            costo: 120,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 5,
            nombre: "bistec a la mexicana",
            descripcion: "Trozos de bistec salteados con jitomate, cebolla y chile, cubiertos con queso derretido.",
            costo: 120,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 6,
            nombre: "fajitas",
            descripcion: "Tiras de carne a la plancha con pimientos y cebolla, coronadas con queso fundido.",
            costo: 120,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 7,
            nombre: "pechuga gratinada",
            descripcion: "Pechuga jugosa al grill, cubierta con una generosa capa de queso gratinado y especias.",
            costo: 110,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 8,
            nombre: "ensalada cesar",
            descripcion: "Lechuga crujiente, pollo a la plancha y aderezo César, con un toque de queso parmesano.",
            costo: 90,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          }
        ],
        matahambre_list : [
          {
            id: 1,
            nombre: "chico",
            descripcion: "Ideal para abrir apetito: incluye carne al pastor recién hecha, acompañada de piña y cebolla asada.",
            costo: 120,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 2,
            nombre: "mediano",
            descripcion: "Una porción perfecta para uno con hambre real. Pastor bien doradito con guarniciones clásicas.",
            costo: 195,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 3,
            nombre: "grande",
            descripcion: "Porción generosa para compartir o para los que no se quedan con hambre. Incluye tortillas, salsas y limones.",
            costo: 265,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 4,
            nombre: "fortachón",
            descripcion: "El favorito de los valientes: carne al pastor extra, doble piña, y un toque especial de la casa.",
            costo: 280,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 5,
            nombre: "kilo de pastor",
            descripcion: "1 kilo completo de deliciosa carne al pastor, ideal para reuniones y fiestas.",
            costo: 280,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 6,
            nombre: "kilo de pastor gratinado",
            descripcion: "Nuestro clásico kilo de pastor, cubierto con queso fundido para una experiencia irresistible.",
            costo: 320,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          }
        ]
      };


  constructor() { }

  mostrarProductos(categoria: keyof ProductosInterface): Observable<any[]> {
    this.categoriaActual = categoria;
    this.productosMostrador = this.productos[categoria] || [];
    return of(this.productosMostrador);
  }

  buscar_producto(dato: string){
    const texto_buscado = dato.toLowerCase();

    const todosLosProductos = [
      ...this.productos.burgers_list,
      ...this.productos.papas_list,
      ...this.productos.alitas_list,
      ...this.productos.guarniciones_list,
      ...this.productos.boneless_list,
      ...this.productos.hotdogs_list,
      ...this.productos.carnes_con_queso_list,
      ...this.productos.matahambre_list
    ];

    const resultado = todosLosProductos.filter(producto =>
      producto.nombre.toLowerCase().includes(texto_buscado)
    );
    return of(resultado);
  }
}
