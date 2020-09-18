import React from "react"
import { Link, graphql } from "gatsby"
import { Jumbo } from "../components"
import { SEO } from "../components"
import styled from 'styled-components'

// The queries just can be add them on pages
export const query = graphql`
  query GET_DESCRIPTION {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
  }
`

const Button = styled.button`
  width: 8rem;
  background-color: #98ca3f;
  border: none;
  border-radius: 10px;
  color: ${props => props.color};
  &:hover {
    transform: scale(1, 4);
  }
`

const IndexPage = ({data}) => (
  <>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
    <Button color='gray'> Comprar</Button>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p><Link to="/page-2/">Go to page 2</Link></p>
    <p><Link to="/thanks">Go to thanks</Link></p>
    <p><Link to="/canceled">Go to canceled</Link></p>
  </>
)

export default IndexPage
