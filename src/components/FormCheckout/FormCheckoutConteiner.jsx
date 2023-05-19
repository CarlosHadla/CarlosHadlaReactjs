import { useContext, useState } from "react";
import FormCheckout from "./FormCheckout";

import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { dataBase } from "../../firebaseConfig";
import { addDoc, collection, updateDoc,doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const FormCheckoutContainer = () => {
  const { cart, precioTotal } = useContext(CartContext);
  const [idOrder, setIdOrder] = useState(null);
  const chechOutFn = (data) => {
    let dataOrder = {
      buyer: data,
      items: cart,
      total: precioTotal(),
    };
    const ordersCollection = collection(dataBase, "orders");
    addDoc(ordersCollection, dataOrder).then((respuesta) =>
      setIdOrder(respuesta.id)
    );


  };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      mail: "",
      telefono: "",
    },
    onSubmit: chechOutFn,
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("Campo obligatorio")
        .min(3, "Mínimo 3 caracteres")
        .max(15, "Máximo 15 caracteres"),
      mail: Yup.string()
        .email("Debe ingresar un Email")
        .required("Campo obligatorio"),
      telefono: Yup.number().required("Campo obligatorio"),
    }),
    validateOnChange: false,
  });

  return (
    <div>
      {idOrder ? (
        <div style={{ textAlign: "center" }}>
          <h1>Confirmado</h1>
          <h2>El Id de tu compra es: {idOrder}</h2>
          <h3>Gracias por comprar con nosotros</h3>
          <Link to="/">
            <Button variant="contained" color="secondary">
              Volver al Inicio
            </Button>
          </Link>
        </div>
      ) : (
        <FormCheckout
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
        />
      )}
    </div>
  );
};

export default FormCheckoutContainer;
