import React from 'react'
import { SEO } from '../components'
import { Button, Purchase } from '../styles/components'
import { Link } from 'gatsby'

export default function thanks() {
  return (
    <div>
      <SEO title='Compra Cancelada' />
      <Purchase>
        <h2>Compra Cancelada</h2>
        <p>Tu swag sigue disponible, lúcelo con orgullo</p>
        <p>!Te esperamos de vuelta, no pares de aprender!</p>
        <span rol='img' aria-label='emoji'>❤️</span>
        <Link to='/'>
          <Button>Volver al Catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
