import { Types } from "mongoose";

export interface Empleado {
nombre:string;
apellido:string;
segundoApellido: string;
cedula: string;
correo:string; 
estado:boolean;
rol: Types.ObjectId;
}