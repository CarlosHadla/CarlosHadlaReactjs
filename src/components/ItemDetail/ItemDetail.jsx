import React from "react";
import styles from "./ItemDetail.module.css";
import CounterContainer from "../Counter/CounterContainer";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const ItemDetail = ({ product , onAdd, totalQuantity }) => {
  return (
    <div className={styles.conteiner}>
      <img src={product.img} alt="portada" />
      <div>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.text}>{product.description}</p>
        <h4>{`price: $${product.price}`}</h4>
        <h4>{`stock: ${product.stock}`}</h4>

      { product.stock>0?(
        <div className={styles.counter}>
        <CounterContainer stock={product.stock} onAdd={onAdd} i={totalQuantity}/>
        </div>) : (
          <div>
            <h1 style={{color:"red"}}>Item Agotado</h1>
            <Link to="/">
              <Button variant="contained" color="secondary">Volver al inicio</Button>
            </Link>
          </div>
          

        )
      }  
      </div>
    </div>
  );
};

export default ItemDetail;
