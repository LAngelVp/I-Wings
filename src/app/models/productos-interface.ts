export interface ProductosInterface {
    burgers_list: Burger[];
    papas_list: Papa[];
    alitas_list: Alita[];
    guarniciones_list: Guarnicion[];
    boneless_list: Boneless[];
    hotdogs_list: Hotdogs[];
    carnes_con_queso_list: CarnesConQueso[];
    matahambre_list: MataHambre[];
    especialidades_list: Especialidades[];
    nachos_list: Nachos[];
    pastas_list: Pastas[];
    quetacos_list: QueTacos[];
    sandwich_list: Sandwich[];
    tacos_list: Tacos[];
    quesos_fundidos_list: QuesosFundidos[];
    sincronizadas_list: Sincronizadas[];
    bebidas_list: Bebidas[];
    malteadas_list: Malteadas[];
    cafes_list: Cafes[];
    cervezas_list: Cervezas[];
    postres_list: Postres[];
  }
  
  export interface Burger {
    id: number;
    nombre: string;
    descripcion: string;
    costo: number;
    costo_papas: number | null;
    suprema: Suprema | null;
    imagen: string;
  }
  
  export interface Suprema {
    descripcion: string;
    costo: number;
  }
  
  export interface Papa {
    id: number;
    nombre: string;
    descripcion: string;
    presentaciones: Presentacion[];
    cantidad: number;
    imagen: string;
  }
  export interface Presentacion {
    nombre: string;
    costo: number;
  }
  
  export interface Alita {
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
    precios: PreciosAlitas;
  }
  
  export interface PreciosAlitas {
    [cantidad: number]: number;
  }
  export interface Guarnicion {
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
    porciones: PorcionesGuarnicion[];
  }
  
  export interface PorcionesGuarnicion {
    nombre: string;
    costo: number;
  }
  export interface Boneless{
    id: number;
    nombre: string;
    descripcion: string;
    costo: number;
    imagen: string;
  }
  export interface Hotdogs{
    id: number;
    nombre: string;
    descripcion: string;
    costo: number;
    imagen: string;
  }
  export interface CarnesConQueso{
    id: number;
    nombre: string;
    descripcion: string;
    costo: number;
    imagen: string;
  }
  export interface MataHambre{
    id: number;
    nombre : string;
    descripcion: string;
    costo: number;
    imagen: string;
  }

  export interface Especialidades{
    id:number;
    nombre:string;
    descripcion: string;
    presentaciones:Presentacion[]
    imagen:string
  }
  export interface Nachos{
    id: number;
    nombre: string;
    descripcion: string;
    costo: number;
    imagen: string;
  }
  export interface Pastas{
    id: number,
    nombre: string;
    descripcion: string;
    costo: number;
    imagen: string;
  }
  export interface QueTacos{
    id:number;
    nombre: string;
    descripcion: string;
    costo: number;
    imagen: string;
  }
   export interface Sandwich{
    id:number;
    nombre: string;
    descripcion: string;
    costo: number;
    imagen: string;
  }
    export interface Tacos{
    id:number;
    nombre: string;
    descripcion: string;
    presentaciones : Presentacion[];
    imagen: string;
  }
    export interface QuesosFundidos{
    id:number;
    nombre: string;
    descripcion: string;
    costo: number;
    imagen: string;
  }
  export interface Sincronizadas{
    id:number;
    nombre: string;
    descripcion: string;
    costo: number;
    imagen: string;
  }
  export interface Bebidas{
    id:number;
    nombre: string;
    descripcion: string;
    presentaciones: Presentacion[];
    imagen: string;
  }
  export interface Malteadas{
    id:number;
    nombre: string;
    descripcion: string;
    costo: number;
    imagen: string;
  }
  export interface Cafes{
    id:number;
    nombre: string;
    descripcion: string;
    costo: number;
    imagen: string;
  }
  export interface Cervezas{
    id:number;
    nombre: string;
    descripcion: string;
    costo: number;
    imagen: string;
  }
  export interface Postres{
    id:number;
    nombre: string;
    descripcion: string;
    costo: number;
    imagen: string;
  }