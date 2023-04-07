export type CategoryModel = {
  id: string;
  name: string;
  imageId: string;
};

export type ProductModel = {
  id: string;
  name: string;
  imageId: string;
  price: number;
  categoryId: string;
};

export type OrderModel = {
  id: string;
  name: string;
  total: number;
  cardNumber: string;
  cardExpire: string;
  cardCvv: string;
  productsIds: string[];
};
