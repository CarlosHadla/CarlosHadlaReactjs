import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (product) => {
    if (repetidoEnCarrito(product.id)) {
      let newCart = cart.map((e) => {
        if (e.id === product.id) {
          return { ...e, quantity: e.quantity + product.quantity };
        } else {
          return e;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, product]);
    }
  };
  const limpiarCarrito = () => {
    setCart([]);
  };

  const eliminarPorId = (id) => {
    //filtrado por "no es igual al actual."
    setCart(cart.filter((e) => e.id !== id));
  };

  const precioTotal = ()=>{
    let total=cart.reduce((acumulador, elemento)=>{
      return acumulador + (elemento.price * elemento.quantity)
    },0)
    return total;
  }

  const repetidoEnCarrito = (id) => {
    // si se encuentra coincidencia retorna true.
    return cart.some((e) => e.id === id);
  };

  const cantidadTotal =()=>{
    let total=cart.reduce((acumulador, elemento)=>{
      return acumulador + (elemento.quantity)
    },0)
    return total;
  }

  let data = { cart, agregarAlCarrito, limpiarCarrito, eliminarPorId, precioTotal, cantidadTotal };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
