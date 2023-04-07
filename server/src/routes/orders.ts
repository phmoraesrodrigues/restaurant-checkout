import { Router } from "express";
import { createOrder } from "../controllers/orders";

const ordersRouter = Router();

ordersRouter.post("/", createOrder);

export default ordersRouter;
