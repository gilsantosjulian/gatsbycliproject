const path = require('path')

exports.createPages = async({graphql, actions}) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/Product.js`)
  const result = await graphql(`
    query GET_PRICES {
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
                color
              }
            }
          }
        }
      }
    }
  `)

  if(result.errors) {
    throw result.errors
  }

  result.data.allStripeSku.edges.forEach(({node}) => {
    createPage({
      path: `${node.id}`,
      component: productTemplate,
      context: node,
    })
  })

}