import { Router } from "express";
import { getAllProducts } from "../controllers/products";

const productsRouter = Router();

productsRouter.get("/", getAllProducts);

export default productsRouter;
