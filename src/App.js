import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetail/ItemDetailConteiner";
import CartConteiner from "./components/Cart/CartConteiner";
import Form from "./components/Form/Form";
import CartContextProvider from "./context/CartContext";

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
            <Route path="/form" element={<Form />} />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
