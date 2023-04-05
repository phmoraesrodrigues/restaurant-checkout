import RestaurantIcon from "@mui/icons-material/Restaurant";
import AppBar from "@mui/material/AppBar";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => (
  <div>
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar>
        <RestaurantIcon />
        <Typography variant="h6" color="inherit" noWrap sx={{ ml: 2, mr: 5 }}>
          Restaurant Checkout
        </Typography>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            href="/"
            sx={{ my: 1, mx: 1.5 }}
          >
            Products
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="/checkout"
            sx={{ my: 1, mx: 1.5 }}
          >
            Cart
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
