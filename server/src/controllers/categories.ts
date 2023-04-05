import { Request, Response } from "express";

export const getAllCategories = (req: Request, res: Response) => {
  return res.status(200).json({ status: "success", message: "All categories" });
};
