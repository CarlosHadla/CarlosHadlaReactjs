import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from 'sweetalert2'
import { dataBase } from "../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";


const ItemDetailConteiner = () => {
  const [product, setProduct] = useState({});
  const { agregarAlCarrito, quantityPorId } = useContext(CartContext);
  const { id } = useParams();

  useEffect(() => {
    const itemCollection = collection(dataBase, "products")
    const documentoRef=doc(itemCollection,id)
    getDoc(documentoRef).then(respuesta =>
      setProduct({
        ...respuesta.data(),
        id:respuesta.id
      }))

    // let finded = products.find((e) => e.id === +id);
    // setProduct(finded);
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
