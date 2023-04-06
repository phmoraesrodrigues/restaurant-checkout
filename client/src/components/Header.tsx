import RestaurantIcon from "@mui/icons-material/Restaurant";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

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
        <Typography variant="h6" color="inherit" noWrap sx={{ ml: 1, mr: 3 }}>
          Reacstaurant
        </Typography>
        <nav>
          <Button to="/" color="primary" component={Link} sx={{ mx: 1 }}>
            Products
          </Button>
          <Button
            to="/checkout"
            color="primary"
            component={Link}
            sx={{ mx: 1 }}
          >
            Checkout
          </Button>
        </nav>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
