import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => (
  <>
    <CssBaseline />
    <Header />
    <Container maxWidth="lg" sx={{ my: 3 }}>
      <Outlet />
    </Container>
  </>
);

export default Layout;
