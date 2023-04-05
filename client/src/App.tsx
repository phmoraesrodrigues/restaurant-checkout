import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Header from "./components/layout/Header";
import ProductContainer from "./components/layout/ProductContainer";

const App = () => {
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <Header />
      <ProductContainer />
    </>
  );
};

export default App;
