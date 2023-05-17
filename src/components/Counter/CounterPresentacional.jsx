import { Button } from "@mui/material";

const CounterPresentacional = ({ sumar, restar, counter, onAdd }) => {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button variant="outlined" color="secondary" onClick={restar}>
        Restar
      </Button>
      <h3>{counter}</h3>
      <Button variant="outlined" color="secondary" onClick={sumar}>
        Sumar
      </Button>
      <Button variant="contained" color="secondary" onClick={() => onAdd(counter)}>Agregar al carrito</Button>
    </div>
  );
};

export default CounterPresentacional;