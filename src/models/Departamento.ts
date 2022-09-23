
import { Departamento } from "../interfaces/departamento.interface";
import * as mongoose from 'mongoose';

const DepartamentoSchema = new mongoose.Schema<Departamento>(
  {
    nombre: {
      type: String,
      required: true,
    },
    empleados: [{
    type: mongoose.Schema.Types.ObjectId,
    },]
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


const DepartamentoModelo =  mongoose.model('departamentos', DepartamentoSchema);
export default DepartamentoModelo;