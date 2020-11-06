import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Button, StyledCart } from '../styles/components'
import priceFormat from '../utils/priceFormat'
import { CartContext } from '../context'

export default function Cart() {
  const { cart } = useContext(CartContext)
  console.log(cart)
  return (
    <StyledCart>
      <h2>Carrito de Compras</h2>
      <table>
        <tbody>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Total</th>
        </tr>
        {
          cart.map((swag) => (
            <tr key={swag.sku}>
              <td>
                <img src={swag.metadata.img} alt={swag.name}/>{swag.name}
              </td>
              <td>USD {swag.price}</td>
              <td>{swag.quantity}</td>
              <td>{swag.quantity * swag.price}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
      <nav>
        <div>
          <h3>Subtotal:</h3>
          <small>Total:</small>
        </div>
        <div>
          <Link to='/'></Link>
          <Button type='outline'>Volver</Button>
          <Button>Comprar</Button>
        </div>
      </nav>
    </StyledCart>
  )
}
