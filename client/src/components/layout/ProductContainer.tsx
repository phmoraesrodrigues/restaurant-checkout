import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { formatCurrency } from "../../lib/currency";

const ProductContainer = () => (
  <Container maxWidth="lg">
    <Card elevation={0} sx={{ display: "flex", my: 3 }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image="/images/3e1bd1342800f7.jpg"
        alt="Category cover image"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent
          sx={{
            flex: "1 0 auto",
            display: "flex",
            justifyContent: "center",
            pt: 3,
          }}
        >
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
        </CardContent>
      </Box>
    </Card>
    <Grid container spacing={3} alignItems="flex-end">
      <Grid item xs={12} sm={6} md={4} lg={3}>
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
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
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
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
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
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
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
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
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
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
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
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
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
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
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
      </Grid>
    </Grid>
  </Container>
);

export default ProductContainer;
