import React, { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const catName = useParams();
  const category = catName.name;

  useEffect(() => {
    const productsFiltred = products.filter((e) => e.category === category);
    const product = new Promise((resolve) => {
      resolve(category ? productsFiltred : products);
    });

    product.then((res) => setItems(res));
  }, [category]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};
