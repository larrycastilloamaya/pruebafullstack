import { Request ,Response} from "express";
import { insertDepartamento, getDepartamentos , getDepartamento, updateDepartamento, deleteDepartamento} from "../services/Departamento";
import { handleHttp } from "../utils/error.handler";

const getItem= async ({params}: Request, res:Response) => {
try {
    const {id} = params;
   const response = await getDepartamento(id);
   const data = response ? response: "NOT_FOUND";
   res.send(data);
} catch (e) {
    handleHttp(res,'ERROR_GET_ITEM');
}

};

const getItems= async (req: Request, res:Response)  => {
    try {
        const response = await getDepartamentos();
        res.send(response);
    } catch (e) {
        handleHttp(res,'ERROR_GET_ITEMS');
    }

};

const updateItem= async ({params, body}: Request, res:Response)  => {
    try {
        const {id} = params;    
        const response = await updateDepartamento(id,body);
        res.send(response);
    } catch (e) {
        handleHttp(res,'ERROR_UPDATE_ITEM');
    }
};

const postItem = async ({ body }: Request, res: Response) => {
    try {
      const responseItem = await insertDepartamento(body);
      res.send(responseItem);
    } catch (e) {
      handleHttp(res, "ERROR_POST_ITEM", e);
    }
  };

const deleteItem= async ({params}: Request, res:Response)  => {

    try {
        const {id} = params;    
        const response = await deleteDepartamento(id);
        res.send(response);
    } catch (e) {
        handleHttp(res,'ERROR_UPDATE_ITEM');
    }

};

export {getItem,getItems,updateItem,postItem,deleteItem};

