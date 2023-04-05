import { Request, Response } from "express";
import { prismaClient } from "../../lib/prismadb";

export const getAllCategories = async (req: Request, res: Response) => {
  const categories = await prismaClient.category.findMany();

  return res.status(200).json(categories);
};
