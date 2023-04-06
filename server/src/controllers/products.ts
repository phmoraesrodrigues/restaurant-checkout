import { Request, Response } from "express";
import { prismaClient } from "../../lib/prismadb";

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await prismaClient.product.findMany();

  return res.status(200).json(products);
};
