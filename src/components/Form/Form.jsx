import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    nombre: "",
    apellido: "",
  });

  const manejarCambio = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const envioForm = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <h1>Hola Form</h1>
      <form onSubmit={envioForm}>
        <input
          type="text"
          placeholder="nombre"
          name="nombre"
          value={data.nombre}
          onChange={manejarCambio}
        />
        <input
          type="text"
          placeholder="apellido"
          name="apellido"
          value={data.apellido}
          onChange={manejarCambio}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
