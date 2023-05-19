import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const FormCheckout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <Grid container justifyContent={"center"} gap={1} p={2}>
          <Grid item xs={12} md={7}>
            <Typography variant="h5" color="initial">
              Llena el formulario para confirmar la compra
            </Typography>
          </Grid>
          <Grid item xs={12} sm={7}>
            <TextField
              id="outlined-basic"
              label="Ingresa tu Nombre"
              variant="outlined"
              onChange={handleChange}
              name="nombre"
              fullWidth
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
            />
          </Grid>

          <Grid item xs={12} sm={7}>
            <TextField
              id="outlined-basic"
              label="Ingresa tu Email"
              variant="outlined"
              name="mail"
              onChange={handleChange}
              fullWidth
              error={errors.mail ? true : false}
              helperText={errors.mail}
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <TextField
              id="outlined-basic"
              label="ingresa tu Telefono"
              variant="outlined"
              onChange={handleChange}
              name="telefono"
              fullWidth
              error={errors.telefono ? true : false}
              helperText={errors.telefono}
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Button type="submit" variant="contained" color="secondary">
              Confirmar Compra
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormCheckout;
