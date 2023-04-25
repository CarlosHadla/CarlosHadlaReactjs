import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";

const ItemDetailConteiner = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let finded = products.find((e) => e.id === +id);
    setProduct(finded);
  }, [id]);

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailConteiner;
