import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Checkout from "./components/pages/Checkout";
import NoPage from "./components/pages/NoPage";
import Products from "./components/pages/Products";
import { CartProvider } from "./contexts/CartContext";

const queryClient = new QueryClient();

const App = () => {
  return (
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Products />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </CartProvider>
  );
};

export default App;
