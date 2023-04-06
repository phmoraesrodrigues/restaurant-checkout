import Grid from "@mui/material/Grid";

import { ProductModel } from "../common/model";
import Product from "./Product";

interface ProductGridProps {
  products: ProductModel[];
}

const ProductGrid = (props: ProductGridProps) => {
  const { products } = props;

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
