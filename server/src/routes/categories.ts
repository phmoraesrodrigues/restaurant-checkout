import { Router } from "express";
import { getAllCategories } from "../controllers/categories";

const categoriesRouter = Router();

categoriesRouter.get("/", getAllCategories);

export default categoriesRouter;
