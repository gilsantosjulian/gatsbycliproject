import React from "react"
import { graphql } from "gatsby"
import { Jumbo } from "../components"
import { Products, SEO } from "../components"

// The queries just can be add them on pages
export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripeSku: allStripePrice {
      edges {
        node {
          id
          price: unit_amount
          product {
            name 
            metadata {
              img
              description
              wear
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({data}) => {
  console.log(data)
  return (
    <>
      <SEO title="Home" />
      <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
      <Products products={data.allStripeSku.edges} />
    </>
  )
}

export default IndexPage
