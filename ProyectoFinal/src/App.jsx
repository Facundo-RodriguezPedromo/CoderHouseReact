import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CartProvider from "./contexts/CartProvider";
import Layout from "./components/Layout";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContainer from "./components/CartContainer";

function App() {
  const currentMonth = new Date().toLocaleString("default", { month: "long" });

  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer saludo={`Ofertas de ${currentMonth} !!!`} />
              }
            />

            <Route
              path="/category/:categoryName"
              element={
                <ItemListContainer saludo={`Ofertas de ${currentMonth} !!!`} />
              }
            />
            <Route
              path="/product/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<CartContainer />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
