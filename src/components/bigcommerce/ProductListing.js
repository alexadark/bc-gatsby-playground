import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import ProductCard from "./ProductCard"

const ProductListing = () => {
  const data = useStaticQuery(graphql`
    query {
      allBigCommerceProducts {
        nodes {
          ...BCProduct
        }
      }
    }
  `)

  const { nodes: products } = data.allBigCommerceProducts
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map(product => {
        return (
          <div style={{ width: "300px" }}>
            <ProductCard key={product.id} product={product} />
          </div>
        )
      })}
    </div>
  )
}

export default ProductListing
