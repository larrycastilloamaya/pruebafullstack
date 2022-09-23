import { Empleado } from './empleado.interface';
import { Types } from "mongoose";

export interface Departamento {
nombre:string;
empleados: Types.ObjectId[];
}