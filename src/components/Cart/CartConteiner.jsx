import React, { useContext } from 'react'
import Cart from './Cart'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'


const CartConteiner = () => {
  const {cart, limpiarCarrito, eliminarPorId, precioTotal} = useContext(CartContext)
  let total = precioTotal()

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
        <Cart cart={cart} eliminarPorId={eliminarPorId} total={total} opcionesEliminarCarro={opcionesEliminarCarro}/>
    </div>
  )
}

export default CartConteiner