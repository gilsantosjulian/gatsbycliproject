import React from 'react'
import { StyledJumbo } from '../styles/components'
import { Image } from './'

const jumboTitle = 'Consigue el mejor swag exclusivo y especial de Platzi'

export default function Jumbo({description}) {
  return (
    <StyledJumbo>
      <div>
        <h2>{jumboTitle}</h2>
        <small>{description}</small>
      </div>
      <Image name='icon'/>
    </StyledJumbo>
  )
}
