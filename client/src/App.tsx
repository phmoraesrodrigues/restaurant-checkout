import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Checkout from "./components/pages/Checkout";
import NoPage from "./components/pages/NoPage";
import Products from "./components/pages/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
