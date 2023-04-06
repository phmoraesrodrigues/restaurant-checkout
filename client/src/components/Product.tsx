import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { ProductModel } from "../common/model";
import { formatCurrency } from "../lib/currency";

interface ProductProps {
  product: ProductModel;
}

const Product = (props: ProductProps) => {
  const {
    product: { name, imageId, price },
  } = props;

  return (
    <Card>
      <CardMedia
        sx={{ height: 250 }}
        image={`/images/${imageId}.jpg`}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Price:</strong> {formatCurrency(price)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" startIcon={<AddShoppingCartIcon />}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
