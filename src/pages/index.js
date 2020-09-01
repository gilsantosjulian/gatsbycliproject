import React from "react"
import { Link } from "gatsby"
// import { Jumbo } from "../../../gatsbycliproject/src/components/Jumbo"

import { Layout, SEO } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <Jumbo /> */}
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p><Link to="/page-2/">Go to page 2</Link></p>
    <p><Link to="/thanks">Go to thanks</Link></p>
    <p><Link to="/canceled">Go to canceled</Link></p>
  </Layout>
)

export default IndexPage
