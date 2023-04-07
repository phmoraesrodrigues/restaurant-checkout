import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";

import { CartContext, CartContextType } from "../../contexts/CartContext";
import useCreateOrder from "../../hooks/useCreateOrder";
import { formatCurrency } from "../../lib/currency";
import Dialog from "../Dialog";
import ProductGrid from "../ProductGrid";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext) as CartContextType;

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState<string>("");
  const [dialogContent, setDialogContent] = useState<string>("");

  const [name, setName] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardExpire, setCardExpire] = useState<string>("");
  const [cardCvv, setCardCvv] = useState<string>("");

  const {
    isLoading,
    isError,
    data,
    mutate: createOrder,
  } = useCreateOrder({
    order: {
      productsIds: cart.map((product) => product.id),
      name,
      cardNumber,
      cardExpire,
      cardCvv,
    },
    onSuccess: () => {
      clearCart();
      setDialogTitle("Order created");
      setDialogContent("Your order has been created successfully.");
      setDialogOpen(true);
    },
    onError: () => {
      setDialogTitle("Error while creating order");
      setDialogContent("An error occurred while creating your order.");
      setDialogOpen(true);
    },
  });

  const totalPrice = formatCurrency(
    cart.reduce((acc, product) => acc + product.price, 0)
  );

  if (!cart?.length) {
    return (
      <>
        {" "}
        <Dialog
          isOpen={dialogOpen}
          handleClose={() => setDialogOpen(false)}
          title={dialogTitle}
          content={dialogContent}
        />
        <Typography variant="h5">
          Your cart is empty. Please add some products.
        </Typography>
      </>
    );
  }

  return (
    <>
      <Dialog
        isOpen={dialogOpen}
        handleClose={() => setDialogOpen(false)}
        title={dialogTitle}
        content={dialogContent}
      />
      <Typography variant="h4">Let's checkout your order!</Typography>
      <Box sx={{ my: 6 }}>
        <ProductGrid products={cart} isCompact />
      </Box>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Total: {totalPrice}
      </Typography>
      <Typography variant="h5" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="cardName"
            label="Name on card"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="cardNumber"
            label="Card number"
            fullWidth
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="expDate"
            label="Expire date"
            fullWidth
            value={cardExpire}
            onChange={(e) => setCardExpire(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            value={cardCvv}
            onChange={(e) => setCardCvv(e.target.value)}
          />
        </Grid>
      </Grid>
      <Button
        onClick={() => createOrder()}
        variant="contained"
        size="large"
        color="primary"
        startIcon={<ShoppingCartIcon />}
        sx={{ mt: 3 }}
      >
        Submit Order
      </Button>
    </>
  );
};

export default Checkout;
