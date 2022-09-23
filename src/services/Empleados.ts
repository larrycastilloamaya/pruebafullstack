import ItemModel from "../models/Empleado";
import { Empleado } from "../interfaces/empleado.interface";
import EmpleadoModelo from "../models/Empleado";

const insertCar = async (item:Empleado) =>{

const responseInsert = await ItemModel.create(item);
return responseInsert;
};

const getCars = async () =>{

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
    

    const getCar = async (id:string) =>{

        const car = await ItemModel.findOne({ _id : id });
        return car;
        };
        
    const updateCar = async (id:string, data: Empleado) =>{

            const car = await ItemModel.findOneAndUpdate({ _id : id }, 
                data,
                {
                    new:true,

                }
                );
            return car;
            };

            const deleteCar = async (id:string) =>{

                const car = await ItemModel.updateOne({ _id : id },
                    { $set: { estado: false}
                }
                )
                
                    return car;
                };
            
export {insertCar,getCars,getCar,updateCar,deleteCar};