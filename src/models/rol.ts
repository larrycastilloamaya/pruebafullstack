import { Schema, Types, model, Model } from "mongoose";
import {  Rol } from "../interfaces/rol.interface";

const RolSchema = new Schema<Rol>(
  {
    nombre: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    salario: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const ItemModel = model("roles", RolSchema);
export default ItemModel;