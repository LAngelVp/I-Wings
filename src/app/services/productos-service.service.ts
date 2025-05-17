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
        ],
        especialidades_list:[
          {
            id: 1,
            nombre: "Gringa al pastor",
            descripcion: "Rellena de carne de pastor en forma de sincronizada.",
            presentaciones:[
              {nombre: "Normal", costo: 85},
              {nombre: "Con papas", costo: 100}
            ],
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 2,
            nombre: "Gringa de Bistec",
            descripcion: "Rellena de carne de bistec en forma de sincronizada.",
            presentaciones:[
              {nombre: "Normal", costo: 95},
              {nombre: "Con papas", costo: 110}
            ],
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 3,
            nombre: "Burrito de pastor",
            descripcion: "El burrito de pastor combina carne al pastor marinada, piña, cebolla y cilantro, todo envuelto en una suave tortilla de harina. Su sabor es una mezcla perfecta entre lo dulce, lo picante y lo ahumado. ¡Una delicia mexicana irresistible!",
            presentaciones:[
              {nombre: "Normal", costo: 90},
              {nombre: "Con papas", costo: 105}
            ],
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 4,
            nombre: "Burrito de bistec",
            descripcion: "El burrito de bistec está relleno con jugosos trozos de carne asada, acompañados de frijoles, arroz, cebolla y cilantro, todo envuelto en una tortilla de harina. Es una explosión de sabor tradicional y auténtico en cada bocado.",
            presentaciones:[
              {nombre: "Normal", costo: 100},
              {nombre: "Con papas", costo: 115}
            ],
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 5,
            nombre: "Big taco de pastor",
            descripcion: "El big taco de pastor ofrece una generosa porción de carne marinada al estilo tradicional, cocinada al trompo con piña. Se sirve en una tortilla grande de maíz, acompañado de cebolla, cilantro y salsa al gusto. ¡Sabor auténtico y contundente!",
            presentaciones:[
              {nombre: "Normal", costo: 90}
            ],
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 6,
            nombre: "Big taco de bictec",
            descripcion: "El big taco de bistec es una explosión de sabor con jugosa carne de res asada al punto perfecto. Servido en una tortilla grande de maíz, acompañado de cebolla, cilantro y salsa, es ideal para los amantes de lo clásico.",
            presentaciones:[
              {nombre: "Normal", costo: 100}
            ],
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 7,
            nombre: "Mega burrito",
            descripcion: "Una tortilla gigante rellena hasta el tope con carne a tu elección, arroz sazonado, frijoles refritos, queso derretido y guacamole casero. Todo envuelto y dorado a la plancha para lograr un exterior crujiente y un interior jugoso. Ideal para los de buen diente.",
            presentaciones:[
              {nombre: "Normal", costo: 170}
            ],
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
        ],
        nachos_list: [
          {
            id: 1,
            nombre: "Nachos de pastor",
            descripcion: "Crujientes totopos cubiertos con jugosa carne al pastor, queso derretido, pico de gallo fresco y un toque de guacamole. Un antojo perfecto para compartir o disfrutar solo.",
            costo: 100,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 2,
            nombre: "Nachos de bistec",
            descripcion: "Totopos dorados cubiertos con suculento bistec a la plancha, queso fundido, frijoles refritos, pico de gallo y jalapeños. Un clásico con sabor intenso y bien casero.",
            costo: 100,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 3,
            nombre: "Nachos de chorizo",
            descripcion: "Totopos calientes con chorizo doradito, queso derretido, frijoles, pico de gallo y crema. Un toque picante y sabroso que enciende el antojo en cada bocado.",
            costo: 100,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
        ],
        pastas_list: [
          {
            id: 1,
            nombre : "Pasta boloñesa",
            descripcion: "Espagueti al dente bañado en una rica salsa boloñesa hecha con carne molida, tomate, ajo y especias. Un platillo reconfortante, lleno de sabor y tradición italiana.",
            costo: 100,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 2,
            nombre : "Pasta alfredo",
            descripcion: "Pasta suave bañada en una cremosa salsa Alfredo hecha con mantequilla, crema y queso parmesano. Suave, reconfortante y perfecta para los amantes de los sabores delicados y cremosos.",
            costo: 100,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
        ],
        quetacos_list: [
          {
            id: 1,
            nombre: "Que taco (pastor)",
            descripcion: "Tortilla de harina, guacamole y queso.",
            costo: 90,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 2,
            nombre: "Que taco (carne molida)",
            descripcion: "Tortilla de harina, guacamole y queso.",
            costo: 90,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 3,
            nombre: "Que taco (bistec)",
            descripcion: "Tortilla de harina, guacamole y queso.",
            costo: 100,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 4,
            nombre: "Que taco (pollo)",
            descripcion: "Tortilla de harina, guacamole y queso.",
            costo: 100,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 5,
            nombre: "Que taco (mix)",
            descripcion: "Tortilla de harina, guacamole y queso.",
            costo: 100,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
        ],
        sandwich_list: [
           {
            id: 1,
            nombre: "Sandwich sencillo",
            descripcion: "Pan suave relleno con jamón, queso y un toque de mayonesa. Ideal para un antojo rápido, con sabor clásico y fresco que nunca falla.",
            costo: 65,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
           {
            id: 1,
            nombre: "club jamon",
            descripcion: "Tres niveles de pan tostado con jamón, queso, lechuga, jitomate y mayonesa. Un clásico lleno de sabor y textura en cada mordida.",
            costo: 85,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
           {
            id: 1,
            nombre: "club chicken",
            descripcion: "Delicioso pollo a la plancha con lechuga fresca, jitomate y mayonesa, servido en pan tostado tipo club. Ideal para una comida ligera pero satisfactoria.",
            costo: 95,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
           {
            id: 1,
            nombre: "club beef (carne de res)",
            descripcion: "Carne de res jugosa, acompañada de queso, vegetales frescos y mayonesa, entre rebanadas de pan tostado. Un sándwich robusto para los amantes de la carne.",
            costo: 95,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
           {
            id: 1,
            nombre: "I wings sandwich",
            descripcion: "Pollo crujiente con tiras de tocino y salsa BBQ, servido en pan suave. Dulce, ahumado y lleno de sabor, es uno de nuestros favoritos de la casa.",
            costo: 100,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
        ],
        tacos_list: [
          {
            id: 1,
            nombre: "Tacos de pastor",
            descripcion: "Tortilla suave con carne de cerdo marinada al estilo tradicional, asada al trompo y servida con piña, cebolla y cilantro. Un clásico irresistible lleno de sabor.",
            presentaciones: [
              {nombre : "Ord. 5 tacos", costo: 50},
              {nombre : "Ord. 5 tacos c/queso", costo: 65},
              {nombre : "Pieza", costo: 12},
              {nombre : "Pieza c/queso", costo: 15},
            ],
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 2,
            nombre: "Tacos de bistec",
            descripcion: "Taco de res con carne jugosa y recién asada, acompañado de cebolla y cilantro sobre una tortilla caliente. Sencillo, sabroso y siempre cumplidor.",
            presentaciones: [
              {nombre : "Ord. 5 tacos", costo: 50},
              {nombre : "Ord. 5 tacos c/queso", costo: 65},
              {nombre : "Pieza", costo: 12},
              {nombre : "Pieza c/queso", costo: 15},
            ],
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
        ],
        quesos_fundidos_list: [
          {
            id: 1,
            nombre: "Choriqueso",
            descripcion: "Queso derretido con chorizo dorado y ligeramente crujiente. Una combinación intensa y sabrosa que conquista desde el primer bocado.",
            costo: 85,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 1,
            nombre: "Pastor",
            descripcion: "Carne de pastor marinada con especias, piña asada y queso fundido en perfecta armonía. Un giro delicioso al clásico.",
            costo: 85,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 1,
            nombre: "Bistec",
            descripcion: "Trozos de carne de res jugosa sobre queso derretido, creando una mezcla rica y sustanciosa. Ideal para acompañar con tortillas.",
            costo: 90,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 1,
            nombre: "Tocino",
            descripcion: "Tiras de tocino crujiente sobre queso caliente, combinando lo ahumado con lo cremoso para una explosión de sabor.",
            costo: 85,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 1,
            nombre: "Champiñones",
            descripcion: "Champiñones salteados con ajo y especias sobre queso fundido, ideal para quienes buscan una opción más ligera sin perder sabor.",
            costo: 85,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 1,
            nombre: "Natural",
            descripcion: "Solo queso derretido en su máxima expresión, suave, cremoso y listo para acompañar con lo que más te guste.",
            costo: 90,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
        ],
        sincronizadas_list: [
          {
            id: 1,
            nombre: "Quesadilla",
            descripcion: "Queso derretido con chorizo dorado y ligeramente crujiente. Una combinación intensa y sabrosa que conquista desde el primer bocado.",
            costo: 18,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 2,
            nombre: "Burrita",
            descripcion: "Tortilla de harina suave, envuelve queso derretido y jamón ligeramente dorado. Es una opción sencilla y reconfortante, perfecta para un desayuno rápido o una cena ligera y sabrosa.",
            costo: 22,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 3,
            nombre: "Burrita preparada",
            descripcion: "Tortilla de harina rellena de carne, guacamole cremoso, pico de gallo fresco y queso. Es jugosa, con sabores intensos y textura balanceada entre lo crujiente, suave y picante.",
            costo: 28,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
        ],
        bebidas_list: [
          {
            id: 1,
            nombre: "Refresco",
            descripcion: "Tipos de refresco",
            presentaciones: [
              {nombre: "500 ml", costo: 25}
            ],
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 2,
            nombre: "Botella de agua",
            descripcion: "Agua embotellada de 500 ml.",
            presentaciones: [
              {nombre: "500 ml", costo: 25}
            ],
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 3,
            nombre: "Té helado",
            descripcion: "Verde, azul y rojo",
            presentaciones: [
              {nombre: "500 mililitros", costo: 25},
              {nombre: "1 litro", costo: 40},
              {nombre: "Jarra 2 litros", costo: 75},
            ],
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 4,
            nombre: "Horchata",
            descripcion: "Bebida refrescante y cremosa hecha con arroz remojado, canela y azúcar. Se licúa, se cuela y se sirve fría. Tiene sabor dulce, aroma suave y una textura ligeramente sedosa.",
            presentaciones: [
              {nombre: "500 mililitros", costo: 25},
              {nombre: "1 litro", costo: 40},
              {nombre: "Jarra 2 litros", costo: 75},
            ],
            imagen: "assets/LOGO/Logo_animado.jpeg"
          }
        ],
        malteadas_list: [
          {
            id: 1,
            nombre: "Fresa",
            descripcion: "",
            costo: 40,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 2,
            nombre: "Vainilla",
            descripcion: "",
            costo: 40,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 3,
            nombre: "Chocolate",
            descripcion: "",
            costo: 40,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 4,
            nombre: "Frappe Vainilla",
            descripcion: "",
            costo: 40,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
          {
            id: 5,
            nombre: "Frappe Moka",
            descripcion: "",
            costo: 40,
            imagen: "assets/LOGO/Logo_animado.jpeg"
          },
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
      ...this.productos.matahambre_list,
      ...this.productos.especialidades_list,
      ...this.productos.nachos_list,
      ...this.productos.pastas_list,
      ...this.productos.sincronizadas_list,
      ...this.productos.bebidas_list,
      ...this.productos.malteadas_list,
    ];

    const resultado = todosLosProductos.filter(producto =>
      producto.nombre.toLowerCase().includes(texto_buscado)
    );
    return of(resultado);
  }
}
