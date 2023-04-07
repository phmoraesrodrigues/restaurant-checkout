import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useContext } from "react";

import { ProductModel } from "../common/model";
import { CartContext, CartContextType } from "../contexts/CartContext";
import { formatCurrency } from "../lib/currency";

interface ProductProps {
  product: ProductModel;
  isCompact?: boolean;
}

const Product = (props: ProductProps) => {
  const { product, isCompact = false } = props;
  const { name, imageId, price } = product;
  const { cart, addToCart, removeFromCart } = useContext(
    CartContext
  ) as CartContextType;

  const isProductInCart = cart.some(
    (cartProduct) => cartProduct.id === product.id
  );

  return (
    <Card>
      <CardMedia
        sx={{ height: isCompact ? 150 : 250 }}
        image={`/images/${imageId}.jpg`}
        title={name}
      />
      <CardContent>
        {isCompact ? (
          <Typography gutterBottom variant="body1" component="div">
            {name}
          </Typography>
        ) : (
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        )}
        <Typography variant="body2" color="text.secondary">
          <strong>Price:</strong> {formatCurrency(price)}
        </Typography>
      </CardContent>
      <CardActions>
        {isProductInCart ? (
          <Button
            onClick={() => removeFromCart(product)}
            size="small"
            startIcon={<RemoveShoppingCartIcon />}
          >
            Remove{!isCompact && " from Cart"}
          </Button>
        ) : (
          <Button
            onClick={() => addToCart(product)}
            size="small"
            startIcon={<AddShoppingCartIcon />}
          >
            Add{!isCompact && " to Cart"}
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Product;
