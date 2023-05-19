import React, { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { dataBase } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { PacmanLoader } from "react-spinners";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const catName = useParams();
  const category = catName.name;

  useEffect(() => {
    // const productsFiltred = products.filter((e) => e.category === category);
    // const product = new Promise((resolve) => {
    //   resolve(category ? productsFiltred : products);
    // });
    let seleccion;
    // product.then((res) => setItems(res));
    const itemsCollection = collection(dataBase, "products");
    if (category) {
      seleccion = query(itemsCollection, where("category", "==", category));
    } else {
      seleccion = itemsCollection;
    }

    getDocs(seleccion)
      .then((respuesta) => {
        const products = respuesta.docs.map((element) => {
          return {
            ...element.data(),
            id: element.id,
          };
        });
        setItems(products);
      })
      .catch((error) => console.log(error));
  }, [category]);

  return (
    <div>
      {items.length < 1 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "3rem",
          }}
        >
          <PacmanLoader color="#a020f0" />
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};
