export interface ProductosInterface {
    burgers_list: Burger[];
    papas_list: Papa[];
    alitas_list: Alita[];
    guarniciones_list: Guarnicion[];
    boneless_list: Boneless[];
    hotdogs_list: Hotdogs[];
    carnes_con_queso_list: CarnesConQueso[];
    matahambre_list: MataHambre[];
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