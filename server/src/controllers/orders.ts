import { Order, Product } from "@prisma/client";
import { Request, Response } from "express";
import { prismaClient } from "../../lib/prismadb";

interface CreateOrderBodyProps extends Order {
  products: Product[];
}

export const createOrder = async (req: Request, res: Response) => {
  const { name, cardNumber, cardExpire, cardCvv, products } =
    req.body as CreateOrderBodyProps;
  const total = products.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  const order = await prismaClient.order.create({
    data: {
      name,
      total,
      cardNumber,
      cardExpire,
      cardCvv,
      products: {
        create: products,
      },
    },
  });

  return res.status(200).json(order);
};
