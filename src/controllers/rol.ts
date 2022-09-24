import { Request ,Response} from "express";
import { insertRol, getRoles , getRol , updateRol, deleteRol} from "../services/Roles";
import { handleHttp } from "../utils/error.handler";

const getItem= async ({params}: Request, res:Response) => {
try {
    const {id} = params;
   const response = await getRol(id);
   const data = response ? response: "NOT_FOUND";
   res.send(data);
} catch (e) {
    handleHttp(res,'ERROR_GET_ITEM');
}

};

const getItems= async (req: Request, res:Response)  => {
    try {
        const response = await getRoles();
        res.send(response);
    } catch (e) {
        handleHttp(res,'ERROR_GET_ITEMS');
    }

};

const updateItem= async ({params, body}: Request, res:Response)  => {
    try {
        const {id} = params;    
        const response = await updateRol(id,body);
        res.send(response);
    } catch (e) {
        handleHttp(res,'ERROR_UPDATE_ITEM');
    }
};

const postItem = async ({ body }: Request, res: Response) => {
    try {
      const responseItem = await insertRol(body);
      res.send(responseItem);
    } catch (e) {
      handleHttp(res, "ERROR_POST_ITEM", e);
    }
  };

const deleteItem= async ({params}: Request, res:Response)  => {

    try {
        const {id} = params;    
        const response = await deleteRol(id);
        res.send(response);
    } catch (e) {
        handleHttp(res,'ERROR_UPDATE_ITEM');
    }

};

export {getItem,getItems,updateItem,postItem,deleteItem};

