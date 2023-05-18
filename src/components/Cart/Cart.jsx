import { Button } from "@mui/material";
import React from "react";

const Cart = ({ cart, limpiarCarrito, eliminarPorId, total}) => {
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        gap: `1rem`,
      }}
    >
      <h1>hola carro</h1>

      {cart.map((e) => {
        return (
          <div
            key={e.id}
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "center",
              border: "1px solid black",
              padding: "0 1rem",
              borderRadius: ".5rem",
            }}
          >
            <h2>{e.title}</h2>
            <h3>{`$${e.price}`}</h3>
            <h3>{e.quantity}</h3>
            <Button
              onClick={() => eliminarPorId(e.id)}
              variant="contained"
              color="secondary"
            >
              Delete Product
            </Button>
          </div>
        );
      })}
      <h2>El total a pagar es ${total}</h2>
      <div style={{ display: `flex`, gap: `1rem` }}>
        <Button onClick={limpiarCarrito} variant="contained" color="secondary">
          Delete
        </Button>
        <Button variant="contained" color="secondary">
          Purchase
        </Button>
      </div>
    </div>
  );
};

export default Cart;
