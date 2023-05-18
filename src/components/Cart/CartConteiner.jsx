import React, { useContext } from 'react'
import Cart from './Cart'
import { CartContext } from '../../context/CartContext'

const CartConteiner = () => {
  const {cart, limpiarCarrito, eliminarPorId, precioTotal} = useContext(CartContext)
  let total = precioTotal()
  return (
    <div>
        <Cart cart={cart} limpiarCarrito={limpiarCarrito}  eliminarPorId={eliminarPorId} total={total}/>
    </div>
  )
}

export default CartConteiner