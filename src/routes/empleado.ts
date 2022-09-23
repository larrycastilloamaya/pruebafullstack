import {Request ,Response, Router} from "express";
import { deleteItem,getItem, getItems, postItem, updateItem } from "../controllers/empleado";

const router = Router();

router.get("/:id",getItem);
router.get("/",getItems);

router.post("/", postItem);

router.put("/:id", updateItem);

router.delete("/:id", deleteItem);

export {router};
