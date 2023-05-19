import React, { useContext } from 'react'
import Cart from './Cart'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


const CartConteiner = () => {
  const {cart, limpiarCarrito, eliminarPorId, precioTotal} = useContext(CartContext)
  let total = precioTotal()

  const navigate = useNavigate()

  const opcionesEliminarCarro = () =>{
    Swal.fire({
      title: 'deseas eliminar el carrito??',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Eliminado!', '', 'success')
        limpiarCarrito()
      }
    })
  }
  return (
    <div>
        <Cart cart={cart} eliminarPorId={eliminarPorId} total={total} opcionesEliminarCarro={opcionesEliminarCarro} navigate={navigate}/>
    </div>
  )
}

export default CartConteiner