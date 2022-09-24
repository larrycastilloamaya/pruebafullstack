import ItemModel from "../models/rol";
import { Rol } from "../interfaces/rol.interface";


const insertRol= async (item:Rol) =>{

const responseInsert = await ItemModel.create(item);
return responseInsert;
};

const getRoles = async () =>{

    const car = await ItemModel.find({});
    return car;
    };
    

    const getRol = async (id:string) =>{

        const car = await ItemModel.findOne({ _id : id });
        return car;
        };
        
    const updateRol = async (id:string, data: Rol) =>{

            const car = await ItemModel.findOneAndUpdate({ _id : id }, 
                data,
                {
                    new:true,

                }
                );
            return car;
            };

            const deleteRol = async (id:string) =>{

                const car = await ItemModel.updateOne({ _id : id },
                    { $set: { estado: false}
                }
                )
                
                    return car;
                };
            
export {insertRol,getRoles,getRol,updateRol,deleteRol};