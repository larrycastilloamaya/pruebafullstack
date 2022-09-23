import { Types } from "mongoose";

export interface Departamento {
nombre:string;
organizacion: Types.ObjectId;
}