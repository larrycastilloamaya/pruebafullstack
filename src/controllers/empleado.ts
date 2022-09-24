import { Request ,Response} from "express";
import { insertEmpleado, getEmpleado , getEmpleados , updateEmpleado, deleteEmpleado} from "../services/Empleados";
import { handleHttp } from "../utils/error.handler";

const getItem= async ({params}: Request, res:Response) => {
try {
    const {id} = params;
   const response = await getEmpleado(id);
   const data = response ? response: "NOT_FOUND";
   res.send(data);
} catch (e) {
    handleHttp(res,'ERROR_GET_ITEM');
}

};

const getItems= async (req: Request, res:Response)  => {
    try {
        const response = await getEmpleados();
        res.send(response);
    } catch (e) {
        handleHttp(res,'ERROR_GET_ITEMS');
    }

};

const updateItem= async ({params, body}: Request, res:Response)  => {
    try {
        const {id} = params;    
        const response = await updateEmpleado(id,body);
        res.send(response);
    } catch (e) {
        handleHttp(res,'ERROR_UPDATE_ITEM');
    }
};

const postItem = async ({ body }: Request, res: Response) => {
    try {
      const responseItem = await insertEmpleado(body);
      res.send(responseItem);
    } catch (e) {
      handleHttp(res, "ERROR_POST_ITEM", e);
    }
  };

const deleteItem= async ({params}: Request, res:Response)  => {

    try {
        const {id} = params;    
        const response = await deleteEmpleado(id);
        res.send(response);
    } catch (e) {
        handleHttp(res,'ERROR_UPDATE_ITEM');
    }

};

export {getItem,getItems,updateItem,postItem,deleteItem};

