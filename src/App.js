import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetail/ItemDetailConteiner";
import CartConteiner from "./components/Cart/CartConteiner";
import CartContextProvider from "./context/CartContext";
import FormCheckoutConteiner from "./components/FormCheckout/FormCheckoutConteiner";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetailConteiner />} />
            <Route path="/cart" element={<CartConteiner />} />
            <Route path="/checkout" element={<FormCheckoutConteiner />} />
            <Route
              path="*"
              element={
                <h1 style={{ textAlign: "center" }}>
                  La ruta especificada no existe
                </h1>
              }
            />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
