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
