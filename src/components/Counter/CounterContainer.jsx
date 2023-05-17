import { useEffect, useState } from "react";
import CounterPresentacional from "./CounterPresentacional";

const CounterContainer = ({ stock, onAdd, i = 1 }) => {
  const [counter, setCounter] = useState(i);

  useEffect(() => {
    setCounter(i);
  }, [i]);

  const sumar = () => {
    counter < stock ? setCounter(counter + 1) : alert("maximo");
  };

  const restar = () => {
    counter > 1 ? setCounter(counter - 1) : alert("minimo")
  };

  return (
    <div>
      <CounterPresentacional
        counter={counter}
        sumar={sumar}
        restar={restar}
        onAdd={onAdd}
      />
    </div>
  );
};

export default CounterContainer;
