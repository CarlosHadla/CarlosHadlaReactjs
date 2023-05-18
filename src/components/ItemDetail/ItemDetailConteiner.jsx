import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";



const ItemDetailConteiner = () => {
  const [product, setProduct] = useState({});
  const { agregarAlCarrito, quantityPorId } = useContext(CartContext);
  const { id } = useParams();

  useEffect(() => {
    let finded = products.find((e) => e.id === +id);
    setProduct(finded);
  }, [id]);

  const onAdd = (quantity) => {

    let data = {
      ...product,
      quantity: quantity,
    };
    agregarAlCarrito(data);
  };

  let totalQuantity = quantityPorId(product.id)


  return (
    <div>
      <ItemDetail product={product} onAdd={onAdd} totalQuantity={totalQuantity}/>
    </div>
  );
};

export default ItemDetailConteiner;
