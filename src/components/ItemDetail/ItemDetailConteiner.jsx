import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from 'sweetalert2'



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

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto agregado',
      showConfirmButton: false,
      timer: 1000
    })
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
