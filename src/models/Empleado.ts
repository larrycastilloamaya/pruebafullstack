
import { Empleado } from "../interfaces/empleado.interface";
import * as mongoose from 'mongoose';

const EmpleadoSchema = new mongoose.Schema<Empleado>(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    segundoApellido: {
      type: String,
      required: true,
    },
    cedula: {
      type: String,
      required: true,
    },
    correo: {
      type: String,
      required: true,
    },
    estado: {
      type: Boolean,
      required: true,
    },
    rol: {
    type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


const EmpleadoModelo =  mongoose.model('empleados', EmpleadoSchema);
export default EmpleadoModelo;