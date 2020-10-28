const path = require('path')

exports.createPages = async({graphql, actions}) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/Product.js`)
  const result = await graphql(`
    query GET_PRICES {
      allStripePrice {
        edges {
          node {
            id
            unit_amount
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

  result.data.allStripePrice.edges.forEach(({node}) => {
    createPage({
      path: `${node.id}`,
      component: productTemplate,
      context: node,
    })
  })

}