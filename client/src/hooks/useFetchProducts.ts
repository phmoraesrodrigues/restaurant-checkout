import { useQuery } from "@tanstack/react-query";
import { ProductModel } from "../common/model";
import api from "../lib/api";

const useFetchProducts = () => {
  const { isLoading, isError, data, error } = useQuery<ProductModel[]>(
    ["products"],
    () => api.get("/products").then((res) => res.data)
  );

  return { isLoading, isError, data, error };
};

export default useFetchProducts;
