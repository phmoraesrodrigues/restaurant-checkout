import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { formatCurrency } from "../lib/currency";

const Product = () => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/3e1bd1342800f7.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Price:</strong> {formatCurrency(100)}
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
