import ItemModel from "../models/Departamento";
import { Departamento } from "../interfaces/departamento.interface";


const insertDepartamento= async (item:Departamento) =>{
const cantidadDeDepartamentos = await ItemModel.count();
if(cantidadDeDepartamentos >5) {
    console.log("no se permite agregegar más departamentos");
return 0;
}else{
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
}


};

const getDepartamentos = async () =>{

    const departamentos = await ItemModel.find({});
    return departamentos;
    };
    

    const getDepartamento= async (id:string) =>{

        const departamento = await ItemModel.findOne({ _id : id });
        return departamento;
        };
        
    const updateDepartamento = async (id:string, data: Departamento) =>{

            const departamento = await ItemModel.findOneAndUpdate({ _id : id }, 
                data,
                {
                    new:true,

                }
                );
            return departamento;
            };

            const deleteDepartamento = async (id:string) =>{
                const cantidadDeDepartamentos = await ItemModel.count();
                if(cantidadDeDepartamentos ==2) {
                    console.log("no se permite tener menos de 2 departamentos");
                return 0;
                }else{


                    const departamentos = await ItemModel.find({});
                    //const car = await ItemModel.deleteOne({ _id : id });
                    
                        return departamentos;
                }


                
                };
            
export {insertDepartamento,getDepartamentos,getDepartamento,updateDepartamento,deleteDepartamento};