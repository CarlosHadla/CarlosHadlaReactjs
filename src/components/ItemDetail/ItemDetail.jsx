import React from "react";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ product }) => {
  return (
    <div className={styles.conteiner}>
      <img src={product.img} alt="portada" />
      <div>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.text}>{product.description}</p>
        <h4>{`price: $${product.price}`}</h4>
        <button className={styles.button}>Purchase</button>
      </div>
    </div>
  );
};

export default ItemDetail;
