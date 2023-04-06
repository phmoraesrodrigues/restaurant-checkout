import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import useFetchCategories from "../../hooks/useFetchCategories";
import Category from "../Category";
import ProductGrid from "../ProductGrid";

const Products = () => {
  const { isLoading, isError, data } = useFetchCategories();

  if (isLoading) {
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

  if (!data?.length || isError) {
    return (
      <Typography variant="h5">
        Sorry, but we don't have any food for you right now!
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h4">Please, make your order!</Typography>
      {data.map(({ id, name, imageId }) => (
        <Box sx={{ mt: 6 }}>
          <Category key={id} name={name} imageId={imageId} />
          <ProductGrid />
        </Box>
      ))}
    </>
  );
};

export default Products;
