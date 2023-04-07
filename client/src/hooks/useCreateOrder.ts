import { useMutation } from "@tanstack/react-query";
import { OrderModel, ProductModel } from "../common/model";
import api from "../lib/api";

interface useCreateOrderProps {
  order: Partial<OrderModel>;
  onSuccess?: () => void;
  onError?: () => void;
}

const useCreateOrder = (props: useCreateOrderProps) => {
  const { order, onSuccess, onError } = props;
  const { isLoading, isSuccess, isError, data, error, mutate } = useMutation<
    ProductModel[]
  >(() => api.post("/orders", order).then((res) => res.data), {
    onSuccess,
    onError,
  });

  return { isLoading, isSuccess, isError, data, error, mutate };
};

export default useCreateOrder;
