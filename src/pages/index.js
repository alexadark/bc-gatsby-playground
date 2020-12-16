import React from "react"
import { Link, useStaticQuery } from "gatsby"
import ProductListing from "../components/bigcommerce/ProductListing"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProductListing />
  </Layout>
)

export default IndexPage
