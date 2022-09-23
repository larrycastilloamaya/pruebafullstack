import ItemModel from "../models/rol";
import { Rol } from "../interfaces/rol.interface";


const insertCar = async (item:Rol) =>{

const responseInsert = await ItemModel.create(item);
return responseInsert;
};

const getCars = async () =>{

    const car = await ItemModel.find({});
    return car;
    };
    

    const getCar = async (id:string) =>{

        const car = await ItemModel.findOne({ _id : id });
        return car;
        };
        
    const updateCar = async (id:string, data: Rol) =>{

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