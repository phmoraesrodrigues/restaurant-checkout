import Grid from "@mui/material/Grid";

import Product from "./Product";

const ProductGrid = () => {
  return (
    <Grid container spacing={3} alignItems="flex-end">
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Product />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Product />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Product />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Product />
      </Grid>
    </Grid>
  );
};

export default ProductGrid;
