import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { Button, StyledCart } from '../styles/components'
import priceFormat from '../utils/priceFormat'
import { CartContext } from '../context'



export default function Cart() {
  const { cart } = useContext(CartContext)
  const [ total, setTotal] = useState(0)
  const [ stripe, setStripe] = useState()

  const getTotal = () => {
    setTotal(
      cart.reduce((acc, current) => acc + (current.quantity * current.price), 0)
    )
  }

  useEffect(() => {
    setStripe(
      window.Stripe(process.env.STRIPE_PK)
    )
    getTotal()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const lineItems = cart.map(({ sku, quantity }) => ({ price: sku, quantity: quantity }))
    const { error } = await stripe.redirectToCheckout({
      lineItems: lineItems,
      mode: 'payment',
      successUrl: process.env.SUCCESS_REDIRECT,
      cancelUrl: process.env.CANCEL_REDIRECT,
    })

    if (error) {
      throw error
    }
  }
  
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
              <td>USD {priceFormat(swag.price)}</td>
              <td>{swag.quantity}</td>
              <td>{priceFormat(swag.quantity * swag.price)}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
      <nav>
        <div>
          <h3>Subtotal:</h3>
          <small>Total: USD {priceFormat(total)}</small>
        </div>
        <div>
          <Link to='/'></Link>
          <Button type='outline'>Volver</Button>
          <Button onClick={handleSubmit} disabled={cart.length === 0}>Comprar</Button>
        </div>
      </nav>
    </StyledCart>
  )
}
