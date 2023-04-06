import { useQuery } from "@tanstack/react-query";
import api from "../lib/api";

const useFetchCategories = () => {
  const { isLoading, isError, data, error } = useQuery(["categories"], () =>
    api.get("/categories").then((res) => res.data)
  );

  return { isLoading, isError, data, error };
};

export default useFetchCategories;
