import ItemModel from "../models/Empleado";
import { Empleado } from "../interfaces/empleado.interface";
import EmpleadoModelo from "../models/Empleado";

const insertEmpleado = async (item:Empleado) =>{

const responseInsert = await ItemModel.create(item);
return responseInsert;
};

const getEmpleados = async () =>{

    const resultado = await EmpleadoModelo.aggregate(
        [
            {
                $lookup:
                  {
                    from: "roles",
                    localField: "rol",
                    foreignField: "_id",
                    as: "usuarioRoles"
                  }
             }
            ]);


    return resultado;
    };
    

    const getEmpleado = async (id:string) =>{

        const car = await ItemModel.findOne({ _id : id });
        return car;
        };
        
    const updateEmpleado = async (id:string, data: Empleado) =>{

            const car = await ItemModel.findOneAndUpdate({ _id : id }, 
                data,
                {
                    new:true,

                }
                );
            return car;
            };

            const deleteEmpleado = async (id:string) =>{

                const car = await ItemModel.updateOne({ _id : id },
                    { $set: { estado: false}
                }
                )
                
                    return car;
                };
            
export {insertEmpleado,getEmpleado,getEmpleados,updateEmpleado,deleteEmpleado};