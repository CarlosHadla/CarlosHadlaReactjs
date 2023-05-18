import { Button } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const CounterPresentacional = ({ sumar, restar, counter, onAdd }) => {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button variant="text" color="secondary" onClick={restar}>
      <RemoveCircleOutlineIcon size="large"/>
      </Button>
      <h3>{counter}</h3>
      <Button variant="text" color="secondary"  onClick={sumar}>
        <AddCircleOutlineIcon size="large"/>
      </Button>
      <Button variant="contained" color="secondary" size="large" onClick={() => onAdd(counter)}>Agregar al carrito</Button>
    </div>
  );
};

export default CounterPresentacional;