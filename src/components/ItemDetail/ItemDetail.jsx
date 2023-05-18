import React from "react";
import styles from "./ItemDetail.module.css";
import CounterContainer from "../Counter/CounterContainer";

const ItemDetail = ({ product , onAdd, totalQuantity }) => {
  return (
    <div className={styles.conteiner}>
      <img src={product.img} alt="portada" />
      <div>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.text}>{product.description}</p>
        <h4>{`price: $${product.price}`}</h4>
        <h4>{`stock: ${product.stock}`}</h4>

        <div className={styles.counter}>
        <CounterContainer stock={product.stock} onAdd={onAdd} i={totalQuantity}/>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
