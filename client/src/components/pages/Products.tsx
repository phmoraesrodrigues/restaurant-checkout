import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import useFetchCategories from "../../hooks/useFetchCategories";
import useFetchProducts from "../../hooks/useFetchProducts";
import Category from "../Category";
import ProductGrid from "../ProductGrid";

const Products = () => {
  const { isLoading: isLoadingCategories, data: dataCategories } =
    useFetchCategories();
  const { isLoading: isLoadingProducts, data: dataProducts } =
    useFetchProducts();

  if (isLoadingCategories || isLoadingProducts) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: 300,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!dataCategories?.length || !dataProducts?.length) {
    return (
      <Typography variant="h5">
        Sorry, but we don't have any food for you right now!
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h4">Please, make your order!</Typography>
      {dataCategories.map(({ id, name, imageId }) => (
        <Box key={id} sx={{ mt: 6 }}>
          <Category name={name} imageId={imageId} />
          <ProductGrid
            products={dataProducts.filter(
              ({ categoryId }) => categoryId === id
            )}
          />
        </Box>
      ))}
    </>
  );
};

export default Products;
